import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamsList = {
  Clients: undefined;
  ClientDetails: {id: string};
  BankSlips: {id: string};
};

export type AppNavigationProps = NativeStackNavigationProp<RootStackParamsList>;
