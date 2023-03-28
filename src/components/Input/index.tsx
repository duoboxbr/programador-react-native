import React, {useState} from 'react';

import {TextInput} from './styles';

import type {InputProps} from './types';

export const Input: React.FC<InputProps> = ({...rest}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <TextInput
      isFocused={isFocused}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...rest}
    />
  );
};
