import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import useGuardedCallback from '@/utils/useGuardedCallback';

const ConnectButton = (props) => {
  const { connect, connected, wallet } = useWallet();
  const { setVisible: showWalletSelectionModal } = useWalletModal();
  const handleConnectClick = useGuardedCallback(connect, [connect]);

  if (wallet != null) {
    return <button {...props} disabled={connected} onClick={handleConnectClick} />;
  } else {
    return (
      <button {...props} onClick={() => showWalletSelectionModal(true)}>
        Select Wallet
      </button>
    );
  }
};

export default ConnectButton;