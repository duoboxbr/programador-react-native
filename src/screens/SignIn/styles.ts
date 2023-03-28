import styled from 'styled-components/native';
import {Button} from '../../components/Button';

export const SigInContainer = styled.View`
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const SigInContent = styled.View`
  margin-top: 10%;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.backgroundLight};
  border-radius: ${({theme}) => theme.radii.lg};
`;

export const InputContainer = styled.View`
  gap: 16px;
  margin-bottom: 35px;
`;

export const UserLogo = styled.Image`
  margin-top: 20%;
  width: 200px;
  height: 200px;
`;

export const SignInButton = styled(Button)`
  padding: 16px;
`;
