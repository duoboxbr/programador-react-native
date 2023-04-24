import styled from 'styled-components/native';
import {StyledTextProps} from './types';

export const TextStyled = styled.Text<StyledTextProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSizes.text};
  color: ${({theme, color}) =>
    color ? theme.colors[color] : theme.colors.normalText};
`;
