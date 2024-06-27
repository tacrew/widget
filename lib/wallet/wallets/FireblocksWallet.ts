import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { fromBase64, fromBech32, toHex } from "@cosmjs/encoding";
import { Registry, TxBodyEncodeObject, encodePubkey, makeAuthInfoBytes, makeSignDoc } from "@cosmjs/proto-signing";
import { AbstractWallet, Account, WalletArgument, WalletName } from "../Wallet";
import { Transaction } from "../../utils/type";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { Any } from "cosmjs-types/google/protobuf/any";
import { PubKey } from "cosmjs-types/cosmos/crypto/secp256k1/keys";
import { SignMode } from "cosmjs-types/cosmos/tx/signing/v1beta1/signing";
import { AminoTypes, createDefaultAminoConverters } from "@cosmjs/stargate";
import { encodeSecp256k1Pubkey, makeSignDoc as makeSignDocAmino } from "@cosmjs/amino";
import { createWasmAminoConverters } from "@cosmjs/cosmwasm-stargate";

export class FireblocksWallet implements AbstractWallet {
    name: WalletName = WalletName.Fireblocks;
    chainId: string;
    registry: Registry;
    aminoTypes = new AminoTypes({ ...createDefaultAminoConverters(), ...createWasmAminoConverters() });
    connector: WalletConnect;

    constructor(arg: WalletArgument, registry: Registry) {
        this.chainId = arg.chainId || "cosmoshub";
        this.registry = registry;

        this.connector = new WalletConnect({
            bridge: "https://bridge.walletconnect.org",
            qrcodeModal: QRCodeModal,
        });

        if (!this.connector.connected) {
            this.connector.createSession();
        }

        this.connector.on("connect", (error, payload) => {
            if (error) {
                throw error;
            }
            console.log("Wallet connected", payload);
        });

        this.connector.on("session_update", (error, payload) => {
            if (error) {
                throw error;
            }
            console.log("Session updated", payload);
        });

        this.connector.on("disconnect", (error, payload) => {
            if (error) {
                throw error;
            }
            console.log("Wallet disconnected", payload);
        });
    }

    async getAccounts(): Promise<Account[]> {
        if (!this.connector.connected) {
            await this.connector.createSession();
        }
        const accounts = this.connector.accounts.map(address => ({ address, pubkey: "" })); // pubkeyは空にしておく
        return accounts;
    }

    supportCoinType(coinType?: string): Promise<boolean> {
        // Fireblocksが指定されたコインタイプをサポートしているかどうかを確認するロジックを実装
        return Promise.resolve(true);
    }

    async sign(transaction: Transaction): Promise<TxRaw> {
        // sign wasm tx with signDirect
        if(transaction.messages.findIndex(x => x.typeUrl.startsWith("/cosmwasm.wasm")) > -1) {
            return this.signDirect(transaction);
        }
        return this.signAmino(transaction);
    }

    async signDirect(transaction: Transaction): Promise<TxRaw> {
        const accounts = await this.getAccounts();
        const hex = toHex(fromBech32(transaction.signerAddress).data);
        const accountFromSigner = accounts.find((account) => toHex(fromBech32(account.address).data) === hex);
        if (!accountFromSigner) {
            throw new Error("Failed to retrieve account from signer");
        }
        const pubkey = Any.fromPartial({
            typeUrl: "/cosmos.crypto.secp256k1.PubKey",
            value: PubKey.encode({
                key: accountFromSigner.pubkey,
            }).finish(),
        });
        const txBodyEncodeObject: TxBodyEncodeObject = {
            typeUrl: "/cosmos.tx.v1beta1.TxBody",
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
            transaction.fee.payer,
        );
        const signDoc = makeSignDoc(txBodyBytes, authInfoBytes, transaction.chainId, transaction.signerData.accountNumber);

        const { signature, signed } = await this.connector.signTransaction({
            from: transaction.signerAddress,
            to: transaction.toAddress,
            data: signDoc,
        });
        return TxRaw.fromPartial({
            bodyBytes: signed.bodyBytes,
            authInfoBytes: signed.authInfoBytes,
            signatures: [fromBase64(signature.signature)],
        });
    }

    async signAmino(tx: Transaction): Promise<TxRaw> {
        const accounts = await this.getAccounts();
        const hex = toHex(fromBech32(tx.signerAddress).data);
        const accountFromSigner = accounts.find((account) => toHex(fromBech32(account.address).data) === hex);
        if (!accountFromSigner) {
            throw new Error("Failed to retrieve account from signer");
        }
        const pubkey = Any.fromPartial({
            typeUrl: "/cosmos.crypto.secp256k1.PubKey",
            value: PubKey.encode({
                key: accountFromSigner.pubkey,
            }).finish(),
        });
        const signMode = SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
        const msgs = tx.messages.map((msg) => this.aminoTypes.toAmino(msg));
        const signDoc = makeSignDocAmino(msgs, tx.fee, tx.chainId, tx.memo, tx.signerData.accountNumber, tx.signerData.sequence);

        const { signature, signed } = await this.connector.signTransaction({
            from: tx.signerAddress,
            to: tx.toAddress,
            data: signDoc,
        });

        const signedTxBody = {
            messages: signed.msgs.map((msg) => this.aminoTypes.fromAmino(msg)),
            memo: signed.memo,
        };
        const signedTxBodyEncodeObject: TxBodyEncodeObject = {
            typeUrl: "/cosmos.tx.v1beta1.TxBody",
            value: signedTxBody,
        };
        const signedTxBodyBytes = this.registry.encode(signedTxBodyEncodeObject);

        const signedGasLimit = Number(signed.fee.gas);
        const signedSequence = Number(signed.sequence);
        const signedAuthInfoBytes = makeAuthInfoBytes(
            [{ pubkey, sequence: signedSequence }],
            signed.fee.amount,
            signedGasLimit,
            signed.fee.granter,
            signed.fee.payer,
            signMode,
        );
        return TxRaw.fromPartial({
            bodyBytes: signedTxBodyBytes,
            authInfoBytes: signedAuthInfoBytes,
            signatures: [fromBase64(signature.signature)],
        });
    }
}
