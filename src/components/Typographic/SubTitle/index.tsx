import React from 'react';

import {SubTitleStyled} from './styles';

import {SubTitleProps} from './types';

export const SubTitle: React.FC<SubTitleProps> = ({children, ...rest}) => {
  return <SubTitleStyled {...rest}>{children}</SubTitleStyled>;
};
