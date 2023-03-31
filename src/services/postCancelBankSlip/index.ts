import {api} from '../api';
import {FormDataParams} from './types';

export const postCancelBankSlip = async (
  authorization: string,
  {id, cancelMessage}: FormDataParams,
) => {
  const postCancelBankSlipFormData = new FormData();
  postCancelBankSlipFormData.append('id', id);
  postCancelBankSlipFormData.append('motivo', cancelMessage);

  return await api.post(
    '/clientes_cobrancas/cancelar',
    postCancelBankSlipFormData,
    {
      headers: {
        Authorization: authorization,
      },
    },
  );
};
