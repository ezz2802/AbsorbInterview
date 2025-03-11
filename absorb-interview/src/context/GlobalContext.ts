import React, { createContext } from 'react';

interface GlobalContextProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);