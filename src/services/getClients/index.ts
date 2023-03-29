import {api} from '../api';
import {FormDataParams, GetClients} from './types';

export const getClients = async (
  authorization: string,
  {type, value}: FormDataParams,
) => {
  const getClientsFormData = new FormData();
  getClientsFormData.append('tipo_servico', 'INTERNET');

  if (type) {
    getClientsFormData.append(type, value);
  }

  return await api.post<GetClients>('clientes/index', getClientsFormData, {
    headers: {
      Authorization: authorization,
    },
  });
};
