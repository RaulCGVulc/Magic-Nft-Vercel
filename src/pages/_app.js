
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { clusterApiUrl } from '@solana/web3.js';
import { useMemo } from 'react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';



const endpoint = clusterApiUrl('mainnet-beta')

const wallets = [
];

const CONNECTION_CONFIG = { commitment: 'processed' };
export default function App({ Component, pageProps }) {

  const adapters = useMemo(
    () =>
      typeof window === 'undefined'
        ? [] // No wallet adapters when server-side rendering.
        : [
          new PhantomWalletAdapter(),
          new UnsafeBurnerWalletAdapter(),
        ],
    [],
  );

  return (
    <ConnectionProvider endpoint={endpoint} config={CONNECTION_CONFIG}>
      <WalletProvider wallets={adapters} autoConnect>
        <Component {...pageProps} />
      </WalletProvider>
    </ConnectionProvider>
  )
}
