import {Control} from 'react-hook-form';
import {InputProps} from '../../../../components/Input/types';

export interface InputValidationProps extends InputProps {
  control: Control;
  error: string | undefined;
  name: string;
}
