import React from 'react';
import {Typographic} from '../../../../components/Typographic';
import {formatDate} from '../../../../util/convertDateToMonthYear';
import {CancelBankSlip} from './sections/CancelBankSlip';
import {CloseBankSlip} from './sections/CloseBankSlip';
import {SendBankSlipByEmail} from './sections/SendBankSlipByEmail';
import {
  BankSlipRowContainer,
  BankSlipRowContent,
  BankSlipRowDetails,
  CircleStatus,
} from './styles';
import {BankSlipRowProps} from './types';

export const BankSlipRow: React.FC<BankSlipRowProps> = ({
  dueDate,
  monthlyReference,
  value,
  expanded,
  status,
  ...rest
}) => {
  return (
    <BankSlipRowContainer {...rest}>
      <BankSlipRowContent>
        <CircleStatus status={status} />
        <Typographic.Text color="titleText">{value}</Typographic.Text>
        <Typographic.Text color="titleText">{dueDate}</Typographic.Text>
        <Typographic.Text color="titleText">
          {formatDate(monthlyReference)}
        </Typographic.Text>
        <Typographic.Text color="normalText">
          {expanded ? 'Ocultar' : 'Detalhes'}
        </Typographic.Text>
      </BankSlipRowContent>
      {expanded && (
        <BankSlipRowDetails>
          <CloseBankSlip />
          <CancelBankSlip />
          <SendBankSlipByEmail />
        </BankSlipRowDetails>
      )}
    </BankSlipRowContainer>
  );
};
