import {api} from '../api';
import {GetClientDetails} from './types';

export const getClientsDetails = async (authorization: string, id: string) => {
  const getClientsDetailsFormData = new FormData();
  getClientsDetailsFormData.append('internetid', id);

  return await api.post<GetClientDetails>(
    '/clientes_internet/buscainfo',
    getClientsDetailsFormData,
    {
      headers: {
        Authorization: authorization,
      },
    },
  );
};
