import {api} from '../api';
import {FormDataParams, PostCloseBankSlip} from './types';

export const postCloseBankSlip = async (
  authorization: string,
  {id, date, payment, value}: FormDataParams,
) => {
  const postCloseBankSlipFormData = new FormData();
  postCloseBankSlipFormData.append('id', id);
  postCloseBankSlipFormData.append('valor_pago', value);
  postCloseBankSlipFormData.append('data_pagamento', payment);
  postCloseBankSlipFormData.append('forma_recebimento_id', date);
  postCloseBankSlipFormData.append('gerar_recibo', '0');

  return await api.post<PostCloseBankSlip>(
    '/clientes_cobrancas/liquidar',
    postCloseBankSlipFormData,
    {
      headers: {
        Authorization: authorization,
      },
    },
  );
};
