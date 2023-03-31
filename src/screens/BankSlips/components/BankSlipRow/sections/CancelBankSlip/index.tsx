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
    reset,
  } = useForm<CancelBankSlipSchemaFormData>({
    resolver: zodResolver(cancelBankSlipSchema),
    reValidateMode: 'onSubmit',
  });
  const {cancelBankSlip} = useBankSlipActions();
  const {apiAuthorization} = useAuth();

  const handleCancelBankSlip = async ({
    cancelMessage,
  }: CancelBankSlipSchemaFormData) => {
    try {
      const {msg} = await cancelBankSlip(apiAuthorization, {cancelMessage});
      Alert.alert('Resultado', msg, [
        {
          text: 'Ok',
          onPress: () => reset(),
        },
      ]);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível fazer o cancelamento');
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
