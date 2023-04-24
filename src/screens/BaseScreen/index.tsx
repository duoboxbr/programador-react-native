import React from 'react';

import {Container} from './styles';
import type {BaseScreenProps} from './types';

export const BaseScreen: React.FC<BaseScreenProps> = ({children, ...rest}) => {
  return <Container {...rest}>{children}</Container>;
};
