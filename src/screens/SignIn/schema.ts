import {z} from 'zod';

export const signInSchema = z.object({
  username: z
    .string({
      required_error: 'Digite o usuário',
    })
    .min(5, {
      message: 'O usuário deve ter no mínimo 5 caracteres',
    }),
  password: z.string({required_error: 'Digite a senha'}).min(6, {
    message: 'A senha deve ter no mínimo 6 caracteres',
  }),
});
