import React from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {signInSchema} from './schema';

import {Typographic} from '../../components/Typographic';
import {SignInFormValidation} from './components/SignInFormValidation';

import {BaseScreen} from '../BaseScreen';

import userImage from '../../assets/images/user-logo.png';

import {
  InputContainer,
  SigInContainer,
  SigInContent,
  SignInButton,
  UserLogo,
} from './styles';

import {SignInFormData} from './types';

export const SignIn: React.FC = () => {
  const {
    control,
    formState: {errors, isLoading},
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  return (
    <BaseScreen>
      <SigInContainer>
        <UserLogo source={userImage} />
        <SigInContent>
          <InputContainer>
            <SignInFormValidation
              name="username"
              control={control}
              error={errors.username && errors.username.message}
              placeholder="Usuário"
            />
            <SignInFormValidation
              name="password"
              control={control}
              error={errors.password && errors.password.message}
              placeholder="Senha"
              secureTextEntry
            />
          </InputContainer>
          <SignInButton variant="primary" disabled={isLoading}>
            <Typographic.Title color="background">Entrar</Typographic.Title>
          </SignInButton>
        </SigInContent>
      </SigInContainer>
    </BaseScreen>
  );
};
