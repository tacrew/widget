import { SignerData, StdFee } from '@cosmjs/stargate'
import { EncodeObject } from '@cosmjs/proto-signing'
import { sha256, stringToPath } from '@cosmjs/crypto'
// ledger
import TransportWebBLE from '@ledgerhq/hw-transport-web-ble'
import TransportWebUSB from '@ledgerhq/hw-transport-webusb'
import CosmosApp from 'ledger-cosmos-js'
import { LedgerSigner } from '@cosmjs/ledger-amino'
import { ethToEvmos } from '@tharsis/address-converter'

export enum WalletName {
    Keplr,
    Ledger,
    MetaMask,
    // None Signning
    Address,
    NameService,
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
  getAccounts(): Promise<any>

  supportCoinType(coinType?: string): Promise<boolean>

  sign(transaction: {chainId: string, signerAddress: string, messages: readonly EncodeObject[], fee: StdFee, memo: string, signerData: SignerData}): Promise<any>
}

export function createWallet(name: WalletName, arg: WalletArgument) : AbstractWallet {
    switch (name) {
        case WalletName.Keplr:
            return new KeplerWallet(arg)
        case WalletName.Ledger:
            return new LedgerWallet(arg)
        case WalletName.MetaMask:
            return new KeplerWallet(arg)
        case WalletName.Address:
            return new AddressWallet(arg)
        case WalletName.NameService:
            return new NameServiceWallet(arg)
    }
}

export class AddressWallet implements AbstractWallet {
    name: WalletName.Address
    address: string

    constructor(arg: WalletArgument) {
        this.address = arg.address|| ""
    }

    getAccounts(): Promise<any> {
        throw new Error('Method not implemented.')
    }
    supportCoinType(coinType?: string | undefined): Promise<boolean> {
        return Promise.resolve(false);
    }
    sign(transaction: { chainId: string; signerAddress: string; messages: readonly EncodeObject[]; fee: StdFee; memo: string; signerData: SignerData }): Promise<any> {
        throw new Error('Method not implemented.')
    }    
}

export class NameServiceWallet implements AbstractWallet {
    name: WalletName.NameService
    address: string[]
    constructor(arg: WalletArgument) {
        this.address = [arg.address|| ""]
    }
    getAccounts(): Promise<any> {
        throw new Error('Method not implemented.')
    }
    supportCoinType(coinType?: string | undefined): Promise<boolean> {
        return Promise.resolve(false);
    }
    sign(transaction: { chainId: string; signerAddress: string; messages: readonly EncodeObject[]; fee: StdFee; memo: string; signerData: SignerData }): Promise<any> {
        throw new Error('Method not implemented.')
    }    
}

export class KeplerWallet implements AbstractWallet {
    name: WalletName.Keplr
    chainId: string
    constructor(arg: WalletArgument) {
        this.chainId = arg.chainId || "cosmoshub"
    }
    async getAccounts(): Promise<any> {
        if (!window.getOfflineSigner || !window.keplr) {
          throw new Error('Please install keplr extension')
        }
        // const chainId = 'cosmoshub'
        await window.keplr.enable(this.chainId )
        const offlineSigner = window.getOfflineSigner(this.chainId)
        return offlineSigner.getAccounts()
    }
    supportCoinType(coinType?: string | undefined): Promise<boolean> {
        return Promise.resolve(true);
    }
    sign(transaction: { chainId: string; signerAddress: string; messages: readonly EncodeObject[]; fee: StdFee; memo: string; signerData: SignerData }): Promise<any> {
        throw new Error('Method not implemented.')
    }    
}


export class LedgerWallet implements AbstractWallet {
    name: WalletName.Ledger
    transport: string
    hdPath: string
    
    constructor(arg: WalletArgument) {
        this.transport = arg.transport || 'usb'
        this.hdPath = arg.hdPath || ''
    }
    async getAccounts(): Promise<any> {
        const transport = this.transport === 'usb' ? await TransportWebUSB.create() : await TransportWebBLE.create()
        // extract Cointype from from HDPath
        const coinType = Number(stringToPath(this.hdPath)[1])
        let ledgerAppName = 'Cosmos'
        switch (coinType) {
            // case 60:
            //     return EthereumLedgerSigner.create(device, hdpath) // 'Ethereum'
            case 529:
                ledgerAppName = 'Secret' // 'Secret'
                break
            case 852:
                ledgerAppName = 'Desmos' // 'Desmos'
                break
            case 330:
                ledgerAppName = 'Terra' // 'Terra'
                break
            case 118:
            default:
        }
        const signer = new LedgerSigner(transport, { hdPaths: [stringToPath(this.hdPath)], ledgerAppName })
        return signer.getAccounts()
    }
    supportCoinType(coinType?: string | undefined): Promise<boolean> {
        return Promise.resolve(true);
    }
    sign(transaction: { chainId: string; signerAddress: string; messages: readonly EncodeObject[]; fee: StdFee; memo: string; signerData: SignerData }): Promise<any> {
        throw new Error('Method not implemented.')
    }

}

