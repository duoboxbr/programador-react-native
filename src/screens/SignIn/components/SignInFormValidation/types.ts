import {Control} from 'react-hook-form';
import {InputProps} from '../../../../components/Input/types';
import {SignInFormData} from '../../types';

export interface InputValidationProps extends InputProps {
  control: Control<SignInFormData>;
  error: string | undefined;
  name: keyof SignInFormData;
}
