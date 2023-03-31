import {PropsWithChildren} from 'react';
import {CancelBankSlipSchemaFormData} from '../../screens/BankSlips/components/BankSlipRow/sections/CancelBankSlip/types';
import {CloseBankSlipSchemaFormData} from '../../screens/BankSlips/components/BankSlipRow/sections/CloseBankSlip/types';
import {SendBankSlipSchemaFormData} from '../../screens/BankSlips/components/BankSlipRow/sections/SendBankSlipByEmail/types';
import {PostCancelBankSlip} from '../../services/postCancelBankSlip/types';
import {PostCloseBankSlip} from '../../services/postCloseBankSlip/types';
import {PostSendBankSlipByEmail} from '../../services/postSendBankSlipByEmail/types';

export type BankSlipActionsProviderProps = PropsWithChildren;

export type BankSlipActionsContextData = {
  bankSlipId: string;
  setBankSlipId: React.Dispatch<React.SetStateAction<string>>;
  cancelBankSlip: (
    authorization: string,
    dataObject: CancelBankSlipSchemaFormData,
  ) => Promise<PostCancelBankSlip>;
  closeBankSlip: (
    authorization: string,
    dataObject: CloseBankSlipSchemaFormData,
  ) => Promise<PostCloseBankSlip>;
  sendByEmailBankSlip: (
    authorization: string,
    dataObject: SendBankSlipSchemaFormData,
  ) => Promise<PostSendBankSlipByEmail>;
};
