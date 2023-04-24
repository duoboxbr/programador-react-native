import React from 'react';
import {TextStyle} from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import {useTheme} from 'styled-components/native';

import {Clients} from '../screens/Clients';
import {ClientDetails} from '../screens/ClientDetails';
import {BankSlips} from '../screens/BankSlips';

import {RootStackParamsList} from './types';

const {Navigator, Screen, Group} =
  createNativeStackNavigator<RootStackParamsList>();

export const ClientsStackRoutes = () => {
  const {colors} = useTheme();

  const headerStyle = (headerTitle: string) => {
    return {
      headerShown: true,
      title: headerTitle,
      headerStyle: {
        backgroundColor: colors.background,
      },
      headerTitleStyle: {
        fontWeight: 'bold' as TextStyle['fontWeight'],
        fontSize: 22,
      },
      headerTintColor: colors.titleText,
      headerTitleAlign: 'center' as 'center',
    };
  };

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Group>
        <Screen name="Clients" component={Clients} />
        <Screen
          options={headerStyle('Clientes')}
          name="ClientDetails"
          component={ClientDetails}
        />
        <Screen
          options={headerStyle('Boletos')}
          name="BankSlips"
          component={BankSlips}
        />
      </Group>
    </Navigator>
  );
};
