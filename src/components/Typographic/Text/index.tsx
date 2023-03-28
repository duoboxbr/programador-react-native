import React from 'react';

import {TextStyled} from './styles';

import {TextComponentProps} from './types';

export const Text: React.FC<TextComponentProps> = ({children, ...rest}) => {
  return <TextStyled {...rest}>{children}</TextStyled>;
};
