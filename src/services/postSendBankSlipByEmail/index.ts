import {api} from '../api';
import {FormDataParams, PostSendBankSlipByEmail} from './types';

export const postSendBankSlipByEmail = async (
  authorization: string,
  {id, email}: FormDataParams,
) => {
  const postSendBankSlipByEmailFormData = new FormData();
  postSendBankSlipByEmailFormData.append('id', id);
  postSendBankSlipByEmailFormData.append('destinatarios', email);

  return await api.post<PostSendBankSlipByEmail>(
    '/boletos/enviar_email',
    postSendBankSlipByEmailFormData,
    {
      headers: {
        Authorization: authorization,
      },
    },
  );
};
