import {zodResolver} from '@hookform/resolvers/zod';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Button} from '../../../../../../components/Button';
import {Input} from '../../../../../../components/Input';
import {Typographic} from '../../../../../../components/Typographic';
import {
  Container,
  Form,
  FormContainer,
  Error,
  ButtonContainer,
} from '../styles';
import {sendBankSlipSchema} from './schema';
import {SendBankSlipSchemaFormData} from './types';

export const SendBankSlipByEmail = () => {
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<SendBankSlipSchemaFormData>({
    resolver: zodResolver(sendBankSlipSchema),
    reValidateMode: 'onSubmit',
  });

  const handleSendBankSlipByEmail = (data: SendBankSlipSchemaFormData) => {};

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
                placeholder="Email"
              />
            )}
            name="email"
          />
          {errors.email && <Error>{errors.email.message}</Error>}
        </Form>
      </FormContainer>
      <ButtonContainer>
        <Button
          variant="primary"
          onPress={handleSubmit(handleSendBankSlipByEmail)}>
          <Typographic.Title>Enviar</Typographic.Title>
        </Button>
      </ButtonContainer>
    </Container>
  );
};
