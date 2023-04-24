import {z} from 'zod';
import {sendBankSlipSchema} from './schema';

export type SendBankSlipSchemaFormData = z.infer<typeof sendBankSlipSchema>;
