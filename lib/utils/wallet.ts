import { WalletStrategy } from '@injectivelabs/wallet-ts';
import { EthereumChainId, ChainId } from '@injectivelabs/ts-types';

const ALCHEMY_KEY = '';

export const alchemyRpcEndpoint = `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`;

export const walletStrategy = new WalletStrategy({
  chainId: ChainId.Mainnet,
  ethereumOptions: {
    ethereumChainId: EthereumChainId.Mainnet,
    rpcUrl: alchemyRpcEndpoint,
  },
});

// Get wallet's addresses
export const getAddresses = async (): Promise<string[]> => {
  const addresses = await walletStrategy.getAddresses();

  if (addresses.length === 0) {
    throw new Error('There are no addresses linked in this wallet.');
  }

  return addresses;
};
