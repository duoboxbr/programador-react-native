import {zodResolver} from '@hookform/resolvers/zod';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Alert} from 'react-native';
import {Button} from '../../../../../../components/Button';
import {Input} from '../../../../../../components/Input';
import {Typographic} from '../../../../../../components/Typographic';
import {useAuth} from '../../../../../../hooks/Auth';
import {useBankSlipActions} from '../../../../../../hooks/BankSlipsActions';
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
    reset,
  } = useForm<SendBankSlipSchemaFormData>({
    resolver: zodResolver(sendBankSlipSchema),
    reValidateMode: 'onSubmit',
  });
  const {sendByEmailBankSlip} = useBankSlipActions();
  const {apiAuthorization} = useAuth();

  const handleSendBankSlipByEmail = async (
    data: SendBankSlipSchemaFormData,
  ) => {
    try {
      const {erro} = await sendByEmailBankSlip(apiAuthorization, data);
      if (erro !== 0) {
        throw 'Erro';
      }
      Alert.alert('Resultado', 'E-mail enviado com sucesso', [
        {
          text: 'Ok',
          onPress: () => reset(),
        },
      ]);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível enviar o e-mail');
    }
  };

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
