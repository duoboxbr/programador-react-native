import React from 'react';

import {Container} from './styles';
import type {BaseScreenProps} from './types';

export const BaseScreen: React.FC<BaseScreenProps> = ({children}) => {
  return <Container>{children}</Container>;
};

export {BaseScreenProps};
