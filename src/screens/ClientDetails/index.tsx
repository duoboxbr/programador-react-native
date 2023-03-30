import React, {useCallback, useEffect, useState} from 'react';
import {Alert, ScrollView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useAuth} from '../../hooks/Auth';

import {BaseScreen} from '../BaseScreen';
import {getClientsDetails} from '../../services/getClientDetails';

import {ServiceCard} from '../../components/ServiceCard';

import {ClientDetailsScreenParams} from './types';
import {ServiceInfo} from '../../services/getClientDetails/types';

export const ClientDetails: React.FC = () => {
  const {
    params: {id},
  } = useRoute<ClientDetailsScreenParams>();
  const [services, setServices] = useState<ServiceInfo[]>([]);
  const {apiAuthorization} = useAuth();
  const navigation = useNavigation();

  const fetchClientDetails = useCallback(async () => {
    try {
      const {
        data: {servicos},
      } = await getClientsDetails(apiAuthorization, id);
      setServices(servicos);
    } catch (error) {
      Alert.alert('Erro', 'Aconteceu um erro ao requisitar o serviço');
      navigation.goBack();
    }
  }, [apiAuthorization, id, navigation]);

  const handleNavigateBankSlip = () => {};

  useEffect(() => {
    fetchClientDetails();
  }, [fetchClientDetails]);

  return (
    <BaseScreen>
      <ScrollView showsHorizontalScrollIndicator={false}>
        {services.map(({clientes}) => (
          <ServiceCard
            key={clientes.id}
            id={clientes.id}
            name={clientes.nome}
            fantasyName={clientes.nome_fantasia}
            cpf={clientes.cpf}
            cnpj={clientes.cnpj}
            typePerson={clientes.tipo_pessoa}
            address={clientes.endereco}
            addressNumber={clientes.endereco_numero}
            neighborhood={clientes.endereco_bairro}
            city={clientes.cidade}
            state={clientes.uf}
            email={clientes.email}
            onPress={handleNavigateBankSlip}
          />
        ))}
      </ScrollView>
    </BaseScreen>
  );
};
