import React from 'react';
import {ScrollView, Text} from 'react-native';

import {BaseScreen} from '../BaseScreen';

import {BankSlipsScreenParams} from './types';
import {useRoute} from '@react-navigation/native';

export const BankSlips: React.FC = () => {
  const {
    params: {id},
  } = useRoute<BankSlipsScreenParams>();

  return (
    <BaseScreen>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Text>Hello world! {id}</Text>
      </ScrollView>
    </BaseScreen>
  );
};
