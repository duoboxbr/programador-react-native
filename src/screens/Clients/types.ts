import {z} from 'zod';
import {searchValueSchema} from './schema';

export type SearchValueFormData = z.infer<typeof searchValueSchema>;
