import React from 'react';

import {TitleStyled} from './styles';

import {TitleProps} from './types';

export const Title: React.FC<TitleProps> = ({children, ...rest}) => {
  return <TitleStyled {...rest}>{children}</TitleStyled>;
};
