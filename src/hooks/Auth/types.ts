import {PropsWithChildren} from 'react';

export type AuthProviderProps = PropsWithChildren;

export type User = {
  username: string;
  password: string;
};

export type AuthContextData = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};
