import React from 'react';
import {Text} from 'react-native';

import {useRoute} from '@react-navigation/native';
import {ClientDetailsScreenParams} from './types';
import {BaseScreen} from '../BaseScreen';

export const ClientDetails: React.FC = () => {
  const {
    params: {id},
  } = useRoute<ClientDetailsScreenParams>();
  return (
    <BaseScreen>
      <Text>{id}</Text>
    </BaseScreen>
  );
};
