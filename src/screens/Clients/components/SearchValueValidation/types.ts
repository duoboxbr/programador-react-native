import {Control} from 'react-hook-form';
import {InputProps} from '../../../../components/Input/types';
import {SearchValueFormData} from '../../types';

export interface InputValidationProps extends InputProps {
  control: Control<SearchValueFormData>;
  error: string | undefined;
  name: keyof SearchValueFormData;
}
