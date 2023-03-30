import {zodResolver} from '@hookform/resolvers/zod';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Button} from '../../../../../../components/Button';
import {Input} from '../../../../../../components/Input';
import {Typographic} from '../../../../../../components/Typographic';
import {
  ButtonContainer,
  Container,
  Form,
  FormContainer,
  Error,
} from '../styles';
import {cancelBankSlipSchema} from './schema';

import {CancelBankSlipSchemaFormData} from './types';

export const CancelBankSlip = () => {
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<CancelBankSlipSchemaFormData>({
    resolver: zodResolver(cancelBankSlipSchema),
    reValidateMode: 'onSubmit',
  });

  const handleCancelBankSlip = (data: CancelBankSlipSchemaFormData) => {};

  return (
    <Container>
      <FormContainer>
        <Form>
          <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <Input
                onChangeText={text => onChange(text)}
                value={value}
                placeholder="Motivo do cancelamento"
              />
            )}
            name="cancelMessage"
          />
          {errors.cancelMessage && (
            <Error>{errors.cancelMessage.message}</Error>
          )}
        </Form>
      </FormContainer>
      <ButtonContainer>
        <Button variant="primary" onPress={handleSubmit(handleCancelBankSlip)}>
          <Typographic.Title>Cancelar</Typographic.Title>
        </Button>
      </ButtonContainer>
    </Container>
  );
};
