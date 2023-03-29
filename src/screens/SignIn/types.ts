import {z} from 'zod';
import {signInSchema} from './schema';

export type SignInFormData = z.infer<typeof signInSchema>;
