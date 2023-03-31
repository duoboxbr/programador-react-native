import React, {createContext, useContext, useState} from 'react';
import {CancelBankSlipSchemaFormData} from '../../screens/BankSlips/components/BankSlipRow/sections/CancelBankSlip/types';
import {CloseBankSlipSchemaFormData} from '../../screens/BankSlips/components/BankSlipRow/sections/CloseBankSlip/types';
import {SendBankSlipSchemaFormData} from '../../screens/BankSlips/components/BankSlipRow/sections/SendBankSlipByEmail/types';
import {postCancelBankSlip} from '../../services/postCancelBankSlip';
import {postCloseBankSlip} from '../../services/postCloseBankSlip';
import {postSendBankSlipByEmail} from '../../services/postSendBankSlipByEmail';

import {
  BankSlipActionsContextData,
  BankSlipActionsProviderProps,
} from './types';

const BankSlipActionsContext = createContext({} as BankSlipActionsContextData);

const BankSlipActionsProvider = ({children}: BankSlipActionsProviderProps) => {
  const [bankSlipId, setBankSlipId] = useState<string>('');

  const cancelBankSlip = async (
    authorization: string,
    {cancelMessage}: CancelBankSlipSchemaFormData,
  ) => {
    try {
      const {data} = await postCancelBankSlip(authorization, {
        id: bankSlipId,
        cancelMessage,
      });
      return data;
    } catch (error) {
      throw error;
    }
  };

  const closeBankSlip = async (
    authorization: string,
    dataObject: CloseBankSlipSchemaFormData,
  ) => {
    try {
      const {data} = await postCloseBankSlip(authorization, {
        id: bankSlipId,
        ...dataObject,
      });
      return data;
    } catch (error) {
      throw error;
    }
  };

  const sendByEmailBankSlip = async (
    authorization: string,
    dataObject: SendBankSlipSchemaFormData,
  ) => {
    try {
      const {data} = await postSendBankSlipByEmail(authorization, {
        id: bankSlipId,
        ...dataObject,
      });
      return data;
    } catch (error) {
      throw error;
    }
  };

  return (
    <BankSlipActionsContext.Provider
      value={{
        bankSlipId,
        setBankSlipId,
        cancelBankSlip,
        closeBankSlip,
        sendByEmailBankSlip,
      }}>
      {children}
    </BankSlipActionsContext.Provider>
  );
};

const useBankSlipActions = () => {
  const context = useContext(BankSlipActionsContext);

  return context;
};

export {BankSlipActionsProvider, useBankSlipActions};
