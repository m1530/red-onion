import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const appContext = createContext();
const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    return (
        <appContext.Provider value={allContext}>
            {children}
        </appContext.Provider>
    );
};

export default AuthProvider;