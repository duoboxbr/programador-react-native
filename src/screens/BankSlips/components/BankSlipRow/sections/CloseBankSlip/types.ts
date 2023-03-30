import {z} from 'zod';
import {closeBankSlipSchema} from './schema';

export type CloseBankSlipSchemaFormData = z.infer<typeof closeBankSlipSchema>;
