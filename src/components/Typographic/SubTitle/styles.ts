import styled from 'styled-components/native';

import {StyledSubTitleProps} from './types';

export const SubTitleStyled = styled.Text<StyledSubTitleProps>`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${({theme}) => theme.fontSizes.subTitle};
  color: ${({theme, color}) =>
    color ? theme.colors[color] : theme.colors.normalText};
`;
