import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css'
import styles from './styles.module.css'
import dynamic from 'next/dynamic';


const ReactUIWalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);



export default function Wallet() {
  const [pubkey, setPubkey] = useState(null);
  const [isDropdownActive, setIsDropdownActive] = useState(false); // Estado para controlar la activación del estilo
  const { publicKey } = useWallet();




  return (
      <WalletModalProvider>
          <ReactUIWalletMultiButtonDynamic/>
      </WalletModalProvider>
  );
}