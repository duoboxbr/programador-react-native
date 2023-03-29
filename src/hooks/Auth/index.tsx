import React, {createContext, useContext, useState} from 'react';
import {encode as btoa} from 'base-64';

import {AuthContextData, AuthProviderProps, User} from './types';

const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({children}: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const apiAuthorization = `Basic ${btoa(
    `${user?.username}:${user?.password}`,
  )}`;

  return (
    <AuthContext.Provider value={{user, setUser, apiAuthorization}}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export {AuthProvider, useAuth};
