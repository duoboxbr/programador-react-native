import {z} from 'zod';

const validPaymentIds = [1, 2, 3, 4, 5, 6, 7, 8];

export const closeBankSlipSchema = z.object({
  value: z.string({
    required_error: 'Digite um valor',
  }),
  date: z
    .string({
      required_error: 'Digite uma data',
    })
    .regex(/^\d{2}\/\d{2}\/\d{4}$/, {
      message: 'A data deve estar no formato DD/MM/AAAA',
    }),
  payment: z
    .string({
      required_error: 'Digite um ID',
    })
    .refine(payment => validPaymentIds.includes(parseInt(payment, 10)), {
      message: 'Digite um ID válido',
    }),
});
