import React, {useState} from 'react';

import {useAuth} from '../../hooks/Auth';
import {getClients} from '../../services/getClients';
import {GetClients} from '../../services/getClients/types';
import {getType} from '../../util/searchTextParser';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {BaseScreen} from '../BaseScreen';

import {ClientCard} from '../../components/ClientCard';
import {Typographic} from '../../components/Typographic';

import {
  ClientList,
  ItemSeparator,
  SearchButton,
  SearchContainer,
} from './styles';
import {Alert} from 'react-native';
import {EmptyClientList} from './components/EmptyClientList';
import {SearchValueValidation} from './components/SearchValueValidation';
import {searchValueSchema} from './schema';
import {SearchValueFormData} from './types';
import {LoadingClients} from './components/LoadingClients';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProps} from '../../routes/types';

export const Clients: React.FC = () => {
  const {apiAuthorization} = useAuth();
  const [clients, setClients] = useState<GetClients>({} as GetClients);
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<SearchValueFormData>({
    resolver: zodResolver(searchValueSchema),
    reValidateMode: 'onSubmit',
  });
  const navigation = useNavigation<AppNavigationProps>();

  const handleGetClients = async ({text}: SearchValueFormData) => {
    const type = getType(text);

    try {
      setIsLoading(true);
      const {data} = await getClients(apiAuthorization, {
        type,
        value: text,
      });
      setClients(data);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível buscar os dados!');
    }
    setIsLoading(false);
  };

  const handleOpenClientDetails = (id: string) => {
    navigation.navigate('ClientDetails', {id});
  };

  return (
    <BaseScreen>
      <SearchContainer>
        <SearchValueValidation
          name="text"
          control={control}
          error={errors.text && errors.text.message}
          placeholder="CPF/CNPJ ou e-mail"
          autoCorrect={false}
          autoCapitalize="none"
        />
        <SearchButton variant="primary" disabled={isLoading}>
          <Typographic.Title
            color="background"
            onPress={handleSubmit(handleGetClients)}>
            Buscar
          </Typographic.Title>
        </SearchButton>
      </SearchContainer>
      {isLoading ? (
        <LoadingClients />
      ) : (
        <ClientList
          data={clients.registros}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <ClientCard
              active={!!Number(item.pl_status)}
              name={item.nome}
              plan={item.plan_nome}
              service={item.tipo_servico}
              onPress={() => handleOpenClientDetails(item.pl_id)}
            />
          )}
          ItemSeparatorComponent={ItemSeparator}
          ListEmptyComponent={EmptyClientList}
        />
      )}
    </BaseScreen>
  );
};
