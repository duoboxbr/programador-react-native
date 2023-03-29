import React from 'react';
import {Controller} from 'react-hook-form';

import {Input} from '../../../../components/Input';

import {InputValidationProps} from './types';

import {Container, Error} from './styles';

export const SignInFormValidation: React.FC<InputValidationProps> = ({
  control,
  error,
  name,
  ...rest
}) => {
  return (
    <Container>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <Input
            onChangeText={text => onChange(text)}
            value={value}
            {...rest}
          />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};
