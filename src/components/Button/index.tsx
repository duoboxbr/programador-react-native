import React from 'react';

import {ButtonContainer} from './styles';

import type {ButtonProps} from './types';

export const Button: React.FC<ButtonProps> = ({...rest}) => {
  return <ButtonContainer activeOpacity={0.8} {...rest} />;
};
