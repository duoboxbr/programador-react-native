import styled from 'styled-components/native';

import {StyledTitleProps} from './types';

export const TitleStyled = styled.Text<StyledTitleProps>`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${({theme}) => theme.fontSizes.title};
  color: ${({theme, color}) =>
    color ? theme.colors[color] : theme.colors.titleText};
`;
