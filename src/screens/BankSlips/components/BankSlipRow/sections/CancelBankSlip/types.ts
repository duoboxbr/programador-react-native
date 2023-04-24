import {z} from 'zod';
import {cancelBankSlipSchema} from './schema';

export type CancelBankSlipSchemaFormData = z.infer<typeof cancelBankSlipSchema>;
