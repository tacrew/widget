import { fromBase64, fromBech32, toHex, toBase64 } from "@cosmjs/encoding";
import { SignerData, StdFee,  } from '@cosmjs/stargate'
import { EncodeObject,   
    encodePubkey,
    GeneratedType,
    isOfflineDirectSigner,
    makeAuthInfoBytes,
    makeSignDoc,
    OfflineSigner,OfflineDirectSigner,
    Registry,
    TxBodyEncodeObject,} from '@cosmjs/proto-signing'
import { sha256, stringToPath } from '@cosmjs/crypto'
import { encodeSecp256k1Pubkey, makeSignDoc as makeSignDocAmino } from "@cosmjs/amino";
import {
    MsgDelegateEncodeObject,
    MsgSendEncodeObject,
    MsgTransferEncodeObject,
    MsgUndelegateEncodeObject,
    MsgWithdrawDelegatorRewardEncodeObject,
    defaultRegistryTypes
  } from "@cosmjs/stargate";
// ledger
import {
    GetTxRequest,
    GetTxResponse,
    ServiceClientImpl,
    SimulateRequest,
    SimulateResponse,
  } from "cosmjs-types/cosmos/tx/v1beta1/service";
import TransportWebBLE from '@ledgerhq/hw-transport-web-ble'
import TransportWebUSB from '@ledgerhq/hw-transport-webusb'
import CosmosApp from 'ledger-cosmos-js'
import { LedgerSigner } from '@cosmjs/ledger-amino'
import { ethToEvmos } from '@tharsis/address-converter'
import { AuthInfo, Fee, Tx, TxBody, TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { SignMode } from "cosmjs-types/cosmos/tx/signing/v1beta1/signing";
import { Any } from "cosmjs-types/google/protobuf/any";
import { AbstractWallet, WalletArgument, WalletName, createWallet } from "./Wallet";
import { post } from "../utils/http";
import Long from "long";


export class UniClient {
    registry: Registry
    wallet: AbstractWallet
    constructor(name: WalletName, arg: WalletArgument) {
        this.registry = new Registry(defaultRegistryTypes)
        this.wallet = createWallet(name, arg)
    }

    async getAccounts() {
        return this.wallet.getAccounts()
    }

    async sign(transaction: { chainId: string; signerAddress: string; messages: readonly EncodeObject[]; fee: StdFee; memo: string; signerData: SignerData }): Promise<TxRaw> {
        const accouts = await this.getAccounts()
        const hex = toHex(fromBech32(transaction.signerAddress).data)
        const accountFromSigner = accouts.find((account) => toHex(fromBech32(account.address).data) === hex);
        if (!accountFromSigner) {
            throw new Error("Failed to retrieve account from signer");
        }
        console.log("account:",  accouts )
        const pubkey = encodePubkey(encodeSecp256k1Pubkey(accountFromSigner.pubkey));
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
        
        const { signature, signed } = await this.wallet.sign(transaction.signerAddress, signDoc);
        return TxRaw.fromPartial({
            bodyBytes: signed.bodyBytes,
            authInfoBytes: signed.authInfoBytes,
            signatures: [fromBase64(signature.signature)],
        });
    }
    
    async simulate (
        endpoint: string,
        messages: readonly EncodeObject[],
        memo: string | undefined,
        sequence: number,
      ) {
        const [first] = await this.wallet.getAccounts()
        const signer = encodeSecp256k1Pubkey(first.pubkey);

        const anyMsgs = messages.map((m) => this.registry.encodeAsAny(m));

        const tx = {
          authInfo: AuthInfo.fromPartial({
            fee: {},
            signerInfos: [
              {
                publicKey: encodePubkey(signer),
                sequence: sequence,
                modeInfo: { single: { mode: SignMode.SIGN_MODE_UNSPECIFIED } },
              },
            ],
          }),
          body: {
            messages: anyMsgs,
            memo: memo,
            timeoutHeight: 0
          },
          signatures: [new Uint8Array()],
        };
        const request = {
          //txBytes: Tx.encode(tx).finish(),
          tx
        }

        console.log("simulate request", JSON.stringify(request))

        const url = `${endpoint}/cosmos/tx/v1beta1/simulate`
        return await post(url, request);
    }

    async simulate2(
        endpoint: string, 
        messages: readonly EncodeObject[],
        memo: string | undefined,
        sequence: number
    ) {
        
        const [first] = await this.wallet.getAccounts()
        const pubkey = encodeSecp256k1Pubkey(first.pubkey);
        const anyMsgs = messages.map((m) => this.registry.encodeAsAny(m));
        const url = `${endpoint}/cosmos/tx/v1beta1/simulate`
        const tx = Tx.fromPartial({
            authInfo: AuthInfo.fromPartial({
              fee: Fee.fromPartial({}),
              signerInfos: [
                {
                  publicKey: encodePubkey(pubkey),
                  sequence: sequence,
                  modeInfo: { single: { mode: SignMode.SIGN_MODE_UNSPECIFIED } },
                },
              ],
            }),
            body: TxBody.fromPartial({
              messages: Array.from(anyMsgs),
              memo: memo,
            }),
            signatures: [new Uint8Array()],
          });
        const request = SimulateRequest.fromPartial({
            tx
            // txBytes: Tx.encode(tx).finish(),
        });
        console.log(tx, request)
        return await post(url, request)
    }


  async broadcastTx(endpoint, bodyBytes: TxRaw) {
    // const txbytes = bodyBytes.authInfoBytes ? TxRaw.encode(bodyBytes).finish() : bodyBytes
    const txbytes = TxRaw.encode(bodyBytes).finish() 
    const txString = toBase64(txbytes)
    const txRaw = {
      tx_bytes: txString,
      mode: 'BROADCAST_MODE_SYNC', // BROADCAST_MODE_SYNC, BROADCAST_MODE_BLOCK, BROADCAST_MODE_ASYNC
    }
    return post(`${endpoint}/cosmos/tx/v1beta1/txs`, txRaw).then(res => {
      if (res.code && res.code !== 0) {
        throw new Error(res.message)
      }
      if (res.tx_response && res.tx_response.code !== 0) {
        throw new Error(res.tx_response.raw_log)
      }
      return res
    })
  }
}