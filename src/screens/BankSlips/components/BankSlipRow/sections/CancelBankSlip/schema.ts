import {z} from 'zod';

export const cancelBankSlipSchema = z.object({
  cancelMessage: z.string({required_error: 'Informe o motivo do cancelamento'}),
});
