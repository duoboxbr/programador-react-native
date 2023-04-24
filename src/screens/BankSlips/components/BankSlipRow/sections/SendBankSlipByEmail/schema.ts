import {z} from 'zod';

export const sendBankSlipSchema = z.object({
  email: z.string({required_error: 'Digite um email'}).refine(
    email => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    {message: 'Digite um e-mail válido'},
  ),
});
