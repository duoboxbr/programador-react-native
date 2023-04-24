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
import {closeBankSlipSchema} from './schema';
import {CloseBankSlipSchemaFormData} from './types';

export const CloseBankSlip = () => {
  const {
    control,
    formState: {errors},
    handleSubmit,
    reset,
  } = useForm<CloseBankSlipSchemaFormData>({
    resolver: zodResolver(closeBankSlipSchema),
    reValidateMode: 'onSubmit',
  });
  const {closeBankSlip} = useBankSlipActions();
  const {apiAuthorization} = useAuth();

  const handleCloseBankSlip = async (data: CloseBankSlipSchemaFormData) => {
    try {
      const {erro} = await closeBankSlip(apiAuthorization, data);
      if (erro !== 0) {
        throw 'Error';
      }
      Alert.alert('Resultado', 'Boleto liquidado com sucesso', [
        {
          text: 'Ok',
          onPress: () => reset(),
        },
      ]);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível liquidar o boleto');
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
                placeholder="Valor a pagar"
                keyboardType="number-pad"
              />
            )}
            name="value"
          />
          {errors.value && <Error>{errors.value.message}</Error>}
        </Form>
        <Form>
          <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <Input
                onChangeText={text => onChange(text)}
                value={value}
                placeholder="Data de pagamento DD/MM/AAAA"
              />
            )}
            name="date"
          />
          {errors.date && <Error>{errors.date.message}</Error>}
        </Form>
        <Form>
          <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <Input
                onChangeText={text => onChange(text)}
                value={value}
                placeholder="ID Forma de pagamento"
                keyboardType="number-pad"
              />
            )}
            name="payment"
          />
          {errors.payment && <Error>{errors.payment.message}</Error>}
        </Form>
      </FormContainer>
      <ButtonContainer>
        <Button variant="primary" onPress={handleSubmit(handleCloseBankSlip)}>
          <Typographic.Title>Baixar</Typographic.Title>
        </Button>
      </ButtonContainer>
    </Container>
  );
};
