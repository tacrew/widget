import {
    AbstractWallet,
    Account,
    WalletArgument,
    WalletName,
    extractChainId,
    keyType,
} from '../Wallet';
import {
    fromBase64,
    fromBech32,
    toHex,
    fromHex,
    toBase64,
} from '@cosmjs/encoding';
import {
    Registry,
    TxBodyEncodeObject,
    makeAuthInfoBytes,
    makeSignDoc,
} from '@cosmjs/proto-signing';
import { Transaction } from '../../utils/type';
import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import { AminoTypes, createDefaultAminoConverters } from '@cosmjs/stargate';
import { Any } from 'cosmjs-types/google/protobuf/any';
import { PubKey } from 'cosmjs-types/cosmos/crypto/secp256k1/keys';

import { connectSnap, getKey, getSnap, CosmjsOfflineSigner } from '@leapwallet/cosmos-snap-provider';

export class MetamaskSnapWallet implements AbstractWallet {
    name: WalletName.MetamaskSnap;
    chainId: string;
    registry: Registry;
    prefix: string;
    aminoTypes = new AminoTypes(createDefaultAminoConverters());

    constructor(arg: WalletArgument, registry: Registry) {
        this.chainId = arg.chainId || 'cosmoshub';
        this.registry = registry;
        this.prefix = arg.prefix || 'evmos';
    }

    async getAccounts(): Promise<Account[]> {
        const snapInstalled = await getSnap().catch(() => {
            console.log('snap not installed');
            return false
        });
        if (!snapInstalled) {
            await connectSnap().catch(()=> {
                throw new Error('connect error')
            })
        }
        const key = await getKey(this.chainId).catch(() => {
            throw new Error('Plesae approve in Metamask Snap and retry')
        });
        return [key]
    }

    async supportCoinType(coinType?: string): Promise<boolean> {
        // Here, you can check if Metamask supports a specific type of cryptocurrency.
        return true;
    }

    async sign(transaction: Transaction): Promise<TxRaw | Uint8Array> {
        const accouts = await this.getAccounts();
        const hex = toHex(fromBech32(transaction.signerAddress).data);
        const accountFromSigner = accouts.find(
            (account) => toHex(fromBech32(account.address).data) === hex
        );
        if (!accountFromSigner) {
            throw new Error('Failed to retrieve account from signer');
        }

        const pubkey = Any.fromPartial({
            typeUrl: keyType(transaction.chainId),
            value: PubKey.encode({
                key: new Uint8Array(Object.values(accountFromSigner.pubkey)),
            }).finish(),
        });
        const txBodyEncodeObject: TxBodyEncodeObject = {
            typeUrl: '/cosmos.tx.v1beta1.TxBody',
            value: {
                messages: transaction.messages,
                memo: transaction.memo,
            },
        };
        const txBodyBytes = this.registry.encode(txBodyEncodeObject);
        const gasLimit = Number(transaction.fee.gas);

        const authInfoBytes = makeAuthInfoBytes(
            [{ pubkey, sequence: transaction.signerData.sequence }],
            transaction.fee.amount,
            gasLimit,
            transaction.fee.granter,
            transaction.fee.payer
        );
        const signDoc = makeSignDoc(
            txBodyBytes,
            authInfoBytes,
            transaction.chainId,
            transaction.signerData.accountNumber
        );

        const offlineSigner = new CosmjsOfflineSigner(this.chainId);
        const { signature, signed } = await offlineSigner.signDirect(transaction.signerAddress, signDoc);

        return TxRaw.fromPartial({
            bodyBytes: signed.bodyBytes,
            authInfoBytes: signed.authInfoBytes,
            signatures: [fromBase64(signature.signature)],
        });
    }
}
