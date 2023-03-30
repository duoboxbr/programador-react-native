import React from 'react';
import {ScrollView, Text} from 'react-native';

import {BaseScreen} from '../BaseScreen';

export const BankSlips: React.FC = () => {
  return (
    <BaseScreen>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Text>Hello world!</Text>
      </ScrollView>
    </BaseScreen>
  );
};
