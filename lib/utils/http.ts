import fetch from 'cross-fetch'
import { Pubkey, encodeSecp256k1Pubkey } from "@cosmjs/amino";
import { AuthInfo, Fee, Tx, TxBody } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { Any } from "cosmjs-types/google/protobuf/any";
import { encodePubkey } from "@cosmjs/proto-signing";
import { SignMode } from "cosmjs-types/cosmos/tx/signing/v1beta1/signing";

export async function get(url: string) {
    return (await fetch(url)).json()
}

export async function post(url: string, data: any) {
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, *cors, same-origin
        // credentials: 'same-origin', // redirect: 'follow', // manual, *follow, error
        // referrerPolicy: 'origin', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        headers: {
          'Content-Type': 'text/plain',
          Accept: '*/*',
          // 'Accept-Encoding': 'gzip, deflate, br',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
      // const response = axios.post((config ? config.api : this.config.api) + url, data)
      return response.json() // parses JSON response into native JavaScript objects
}

export async function getAccount(endpoint: string, address: string) {
    const url = `${endpoint}/cosmos/auth/v1beta1/accounts/${address}`
    return get(url)
}

export async function getBalance(endpoint: string, address: string) {
    const url = `${endpoint}/cosmos/bank/v1beta1/balances/${address}`
    return get(url)
}

