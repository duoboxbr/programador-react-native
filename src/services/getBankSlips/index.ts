import {api} from '../api';
import {GetBankSlips} from './types';

export const getBankSlips = async (authorization: string, id: string) => {
  const getBankSlipsFormData = new FormData();
  getBankSlipsFormData.append('origem_tipo', 'INTERNET');
  getBankSlipsFormData.append('origem_id', id);

  return await api.post<GetBankSlips>(
    '/clientes_cobrancas/pesquisa',
    getBankSlipsFormData,
    {
      headers: {
        Authorization: authorization,
      },
    },
  );
};
