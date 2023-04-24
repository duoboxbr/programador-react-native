import {TouchableOpacityProps} from 'react-native';

export type BankSlipRowProps = TouchableOpacityProps & {
  dueDate: string;
  value: string;
  monthlyReference: string;
  expanded: boolean;
  status: string;
};

export type CircleStatusProps = {
  status: string;
};
