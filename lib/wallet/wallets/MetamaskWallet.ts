import { AbstractWallet, Account, WalletArgument, WalletName } from '../Wallet';
import { createTxRaw } from '@evmos/proto';
import { fromBase64, fromBech32, toHex } from '@cosmjs/encoding';
import { evmosToEth } from '@evmos/address-converter';
import {
    Registry,
    encodePubkey,
    makeAuthInfoBytes,
} from '@cosmjs/proto-signing';
import { Transaction } from '../../utils/type';
import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import { Buffer } from 'buffer';
import { hashMessage } from '@ethersproject/hash';
import { computePublicKey, recoverPublicKey } from '@ethersproject/signing-key';

export class MetamaskWallet implements AbstractWallet {
    name: WalletName.Metamask;
    chainId: string;
    registry: Registry;

    constructor(arg: WalletArgument, registry: Registry) {
        this.chainId = arg.chainId || 'cosmoshub';
        this.registry = registry;
    }

    async getAccounts(): Promise<Account[]> {
        // @ts-ignore
        if (!window.ethereum || !window.ethereum.request) {
            throw new Error('Please install Metamask extension');
        }

        // @ts-ignore46
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts',
        });

        const message = 'Verify Public Key';
        // @ts-ignore
        const signature = await window?.ethereum?.request({
            method: 'personal_sign',
            params: [message, accounts[0], ''],
        });

        const uncompressedPk = recoverPublicKey(
            hashMessage(message),
            signature
        );
        const hexPk = computePublicKey(uncompressedPk, true);
        const pk = Buffer.from(hexPk.replace('0x', ''), 'hex').toString(
            'base64'
        );

        console.log(pk,"pk___")

        return accounts.map((address) => ({
            address: address.toLowerCase(),
            algo: 'secp256k1',
            pubkey: pk,
        }));
    }

    async supportCoinType(coinType?: string): Promise<boolean> {
        // Here, you can check if Metamask supports a specific type of cryptocurrency.
        return true;
    }

    async sign(transaction: Transaction): Promise<TxRaw> {
        const { chainId, signerAddress, messages, fee, memo, signerData } =
            transaction;

        // Obtaining the data required for MetaMask signature
        // @ts-ignore
        await window.ethereum.enable();
        // TODO
        // const senderHexAddress = evmosToEth(signerAddress);
        const eip712Payload = JSON.stringify(messages[0]);

        // Signing an EIP-712 payload using MetaMask.
        // @ts-ignore
        const signature = await window.ethereum.request({
            method: 'eth_signTypedData_v4',
            // TODO
            // params: [senderHexAddress, eip712Payload],
            params: [signerAddress, eip712Payload],
        });

        // Creating a TxRaw object after signing.
        const signatureBytes = Buffer.from(signature.replace('0x', ''), 'hex');
        const txBodyBytes = this.registry.encode({
            typeUrl: '/cosmos.tx.v1beta1.TxBody',
            value: { messages },
        });

        // getAccounts
        const accounts = await this.getAccounts(); 
        const account = accounts.find(
            (acc) => acc.address.toLowerCase() === signerAddress.toLowerCase()
        );
        if (!account) {
            throw new Error('Account not found');
        }

        const pubkeyBytes = Buffer.from(
            Buffer.from(account.pubkey).toString('base64'),
            'base64'
        );
        const pubkey = {
            type: 'tendermint/PubKeySecp256k1',
            value: Array.from(pubkeyBytes),
        };

        const authInfoBytes = makeAuthInfoBytes(
            [{ pubkey: encodePubkey(pubkey), sequence: signerData.sequence }],
            fee.amount,
            Number(fee.gas),
            undefined, // feeGranter
            undefined // feePayer
        );

        //  Using TxRaw.fromPartial to create a TxRaw object with attribute values.
        const signedTx: TxRaw = TxRaw.fromPartial({
            bodyBytes: txBodyBytes,
            authInfoBytes: authInfoBytes,
            signatures: [fromBase64(signatureBytes.toString('base64'))],
        });

        return signedTx;
    }
}
