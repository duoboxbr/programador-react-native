import {ColorValue, TextInputProps} from 'react-native';

export type InputProps = TextInputProps;

export type StyledInputProps = {
  isFocused: boolean;
  placeholderTextColor?: ColorValue;
};
