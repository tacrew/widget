
export async function sign(device, chainId, signerAddress, messages, fee, memo, signerData) {
  const hdpath = getHdPath(signerAddress)
  let client
  if (device.startsWith('ledger')) {
    client = await getSigningClient(device, hdpath)
  } else {
    if (!window.getOfflineSigner || !window.keplr) {
      throw new Error('Please install keplr extension')
    }
    await window.keplr.enable(chainId)
    if (isEvmosBasedChain(chainId)) {
      const signer = window.getOfflineSigner(chainId)
      client = await SigningKeplerEthermintClient.offline(signer)
    } else {
      const signer = window.getOfflineSignerOnlyAmino(chainId)
      client = await SigningStargateClient.offline(signer)
    }
  }
  const coinType = Number(hdpath[1])
  const addr = device.startsWith('ledger') && coinType !== 60 ? toSignAddress(signerAddress) : signerAddress
  return client.sign(addr, messages, fee, memo, signerData)
}