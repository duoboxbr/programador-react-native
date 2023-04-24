import styled from 'styled-components/native';
import {StyledInputProps} from './types';

export const TextInput = styled.TextInput.attrs(
  ({theme: {colors}, placeholderTextColor}) => ({
    placeholderTextColor: placeholderTextColor ?? colors.normalText,
  }),
)<StyledInputProps>`
  color: ${({theme}) => theme.colors.titleText};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSizes.subTitle};
  padding: 10px 8px;
  border: 1px solid
    ${({theme, isFocused}) =>
      isFocused ? theme.colors.primary : theme.colors.secondary};
  border-radius: ${({theme}) => theme.radii.md};
`;
