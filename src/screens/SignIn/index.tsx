import React from 'react';

import {Input} from '../../components/Input';
import {Typographic} from '../../components/Typographic';

import {BaseScreen} from '../BaseScreen';

import userImage from '../../assets/images/user-logo.png';

import {
  InputContainer,
  SigInContainer,
  SigInContent,
  SignInButton,
  UserLogo,
} from './styles';

export const SignIn: React.FC = () => {
  return (
    <BaseScreen>
      <SigInContainer>
        <UserLogo source={userImage} />
        <SigInContent>
          <InputContainer>
            <Input placeholder="Usuário" />
            <Input placeholder="Senha" secureTextEntry />
          </InputContainer>
          <SignInButton variant="primary">
            <Typographic.Title color="background">Entrar</Typographic.Title>
          </SignInButton>
        </SigInContent>
      </SigInContainer>
    </BaseScreen>
  );
};
