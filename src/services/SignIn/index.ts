import {api} from '../api';
import {encode as btoa} from 'base-64';

import {SignInDataParams} from './types';

export const signIn = async ({username, password}: SignInDataParams) => {
  const signInFormData = new FormData();
  signInFormData.append('login', username);
  signInFormData.append('senha', password);

  const authorization = `Basic ${btoa(`${username}:${password}`)}`;

  return await api.post('clientes/index', signInFormData, {
    headers: {
      Authorization: authorization,
    },
  });
};
