import { useLocalStorage } from '@solana/wallet-adapter-react';
import React, { createContext, useContext } from 'react';

export const AutoConnectContext = createContext({});

export function useAutoConnect() {
    return useContext(AutoConnectContext);
}

export function AutoConnectProvider({ children }) {
    const [autoConnect, setAutoConnect] = useLocalStorage('autoConnect', true);

    return (
        <AutoConnectContext.Provider value={{ autoConnect, setAutoConnect }}>
            {children}
        </AutoConnectContext.Provider>
    );
}
