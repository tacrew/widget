import { fromBase64, fromBech32, toHex } from "@cosmjs/encoding";
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
import TransportWebBLE from '@ledgerhq/hw-transport-web-ble'
import TransportWebUSB from '@ledgerhq/hw-transport-webusb'
import CosmosApp from 'ledger-cosmos-js'
import { LedgerSigner } from '@cosmjs/ledger-amino'
import { ethToEvmos } from '@tharsis/address-converter'
import { SignMode } from "cosmjs-types/cosmos/tx/signing/v1beta1/signing";
import { TxRaw, SignDoc } from "cosmjs-types/cosmos/tx/v1beta1/tx";

export enum WalletName {
    Keplr = "Keplr",
    Ledger = "LedgerUSB",
    LedgerBLE = "LedgerBLE",
    Metamask = "Metemask",
    // None Signning
    Address = "Address",
    NameService = "Nameservice",
}

export interface ConnectedWallet {
    wallet: WalletName,
    cosmosAddress: string
    hdPath?: string 
}

export interface Account {
    address: string,
    algo: string,
    pubkey: Uint8Array,
}

export interface WalletArgument {
    chainId?: string,
    hdPath?: string,
    address?: string,
    name?: string,
    transport?: string
}

export interface AbstractWallet {
  name: WalletName  
  /**
   * The the accounts from the wallet (addresses)
   */
  getAccounts(): Promise<Account[]>
  supportCoinType(coinType?: string): Promise<boolean>
  sign(signerAddress: string, signDoc: SignDoc): Promise<any>
}


const DEFAULT_HDPATH = "m/44'/118/0'/0/0";

export function readWallet(hdPath?: string) {
    return JSON.parse(
        localStorage.getItem(hdPath || DEFAULT_HDPATH) || '{}'
    ) as ConnectedWallet
}
export function writeWallet(connected: ConnectedWallet , hdPath?: string) {
    localStorage.setItem( hdPath || DEFAULT_HDPATH,JSON.stringify(connected))
}

export function removeWallet(hdPath?: string) {
    localStorage.removeItem(hdPath || DEFAULT_HDPATH);
}

export function createWallet(name: WalletName, arg: WalletArgument) : AbstractWallet {
    console.log("wallet arg:", arg)
    switch (name) {
        case WalletName.Keplr:
            return new KeplerWallet(arg)
        // case WalletName.Ledger:
        //     return new LedgerWallet(arg)
        // case WalletName.LedgerBLE:
        //     arg.transport = "BLE"
        //     return new LedgerWallet(arg)
        // case WalletName.Metamask:
        //     return new KeplerWallet(arg)
        // case WalletName.Address:
        //     return new AddressWallet(arg)
        // case WalletName.NameService:
        //     return new NameServiceWallet(arg)
    }
    throw new Error("No wallet created")
}

// export class AddressWallet implements AbstractWallet {
//     name: WalletName.Address
//     address: string

//     constructor(arg: WalletArgument) {
//         this.address = arg.address|| ""
//     }

//     getAccounts(): Promise<Account[]> {
//         throw new Error('Method not implemented.')
//     }
//     supportCoinType(coinType?: string | undefined): Promise<boolean> {
//         return Promise.resolve(false);
//     }
//     sign(transaction: { chainId: string; signerAddress: string; messages: readonly EncodeObject[]; fee: StdFee; memo: string; signerData: SignerData }): Promise<any> {
//         throw new Error('Method not implemented.')
//     }    
// }

// export class NameServiceWallet implements AbstractWallet {
//     name: WalletName.NameService
//     address: string[]
//     constructor(arg: WalletArgument) {
//         this.address = [arg.address|| ""]
//     }
//     getAccounts(): Promise<any> {
//         throw new Error('Method not implemented.')
//     }
//     supportCoinType(coinType?: string | undefined): Promise<boolean> {
//         return Promise.resolve(false);
//     }
//     sign(transaction: { chainId: string; signerAddress: string; messages: readonly EncodeObject[]; fee: StdFee; memo: string; signerData: SignerData }): Promise<any> {
//         throw new Error('Method not implemented.')
//     }    
// }

export class KeplerWallet implements AbstractWallet {
    name: WalletName.Keplr
    chainId: string
    registry: Registry
    constructor(arg: WalletArgument) {
        this.chainId = arg.chainId || "cosmoshub"
        // @ts-ignore
        if (!window.getOfflineSigner || !window.keplr) {
            throw new Error('Please install keplr extension')
        }
        this.registry = new Registry(defaultRegistryTypes)
    }
    async getAccounts(): Promise<Account[]> {
        // const chainId = 'cosmoshub'
        // @ts-ignore
        await window.keplr.enable(this.chainId )
        // @ts-ignore
        const offlineSigner = window.getOfflineSigner(this.chainId)
        return offlineSigner.getAccounts()
    }
    supportCoinType(coinType?: string | undefined): Promise<boolean> {
        return Promise.resolve(true);
    }
    async sign( signerAddress: string, signDoc: SignDoc ): Promise<any> {
        // @ts-ignore
        const offlineSigner = window.getOfflineSigner(this.chainId)
        return await offlineSigner.signDirect(signerAddress, signDoc);
    }    
}


// export class LedgerWallet implements AbstractWallet {
//     name: WalletName.Ledger
//     transport: string
//     hdPath: string
    
//     constructor(arg: WalletArgument) {
//         this.transport = arg.transport || 'usb'
//         this.hdPath = arg.hdPath || ''
//     }
//     getSigner() {
//         const transport = this.transport === 'usb' ? await TransportWebUSB.create() : await TransportWebBLE.create()
//         // extract Cointype from from HDPath
//         const coinType = Number(stringToPath(this.hdPath)[1])
//         let ledgerAppName = 'Cosmos'
//         switch (coinType) {
//             // case 60:
//             //  return EthereumLedgerSigner.create(device, hdpath) // 'Ethereum'
//             case 529:
//                 ledgerAppName = 'Secret' // 'Secret'
//                 break
//             case 852:
//                 ledgerAppName = 'Desmos' // 'Desmos'
//                 break
//             case 330:
//                 ledgerAppName = 'Terra' // 'Terra'
//                 break
//             case 118:
//             default:
//         }
//         return new LedgerSigner(transport, { hdPaths: [stringToPath(this.hdPath)], ledgerAppName })
//     }
    
//     async getAccounts(): Promise<Account[]> {
//         const account = this.getSigner().getAccounts()
//         return account
//     }
//     supportCoinType(coinType?: string | undefined): Promise<boolean> {
//         return Promise.resolve(true);
//     }
//     sign(signerAddress: string, signDoc: SignDoc): Promise<any> {
//         return this.getSigner().signAmino(signerAddress, signDoc)
//     }

// }

