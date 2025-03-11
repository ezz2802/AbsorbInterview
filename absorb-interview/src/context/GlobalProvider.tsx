import React, { useState, ReactNode } from 'react';
import { GlobalContext } from './GlobalContext';

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
    const [count, setCount] = useState(0);

    return (
        <GlobalContext.Provider value={{ count, setCount }}>
            {children}
        </GlobalContext.Provider>
    );
};