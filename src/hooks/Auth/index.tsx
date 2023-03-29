import React, {createContext, useContext, useState} from 'react';

import {AuthContextData, AuthProviderProps, User} from './types';

const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({children}: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export {AuthProvider, useAuth};
