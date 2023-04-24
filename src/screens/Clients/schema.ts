import {z} from 'zod';
import {getType} from '../../util/searchTextParser';

export const searchValueSchema = z.object({
  text: z
    .string()
    .optional()
    .refine(
      text => {
        if (!text) {
          return true;
        }
        return getType(text);
      },
      {message: 'Digite apenas CPF/CNPJ ou e-mail!'},
    ),
});
