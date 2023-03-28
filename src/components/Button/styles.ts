import styled, {css} from 'styled-components/native';
import {StyledButtonProps} from './types';

export const ButtonContainer = styled.TouchableOpacity<StyledButtonProps>`
  padding: 4px;
  border-radius: ${({theme}) => theme.radii.md};
  align-items: center;
  justify-content: center;
  ${({theme, variant}) => {
    const variantMapping = {
      primary: theme.colors.primary,
      secondary: theme.colors.secondary,
      tertiary: 'transparent',
    }[variant];

    return css`
      background-color: ${variantMapping};
    `;
  }};
`;
