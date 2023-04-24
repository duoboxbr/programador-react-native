import React from 'react';
import {Alert} from 'react-native';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useAuth} from '../../hooks/Auth';
import {signIn} from '../../services/SignIn';

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
    handleSubmit,
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const {setUser} = useAuth();

  const handleSignIn = async (form: SignInFormData) => {
    try {
      const {data} = await signIn(form);
      if (data.erro) {
        throw new Error();
      }
      setUser(form);
    } catch (error) {
      Alert.alert('Erro ao fazer o login', 'Usuário ou senha inválidos');
    }
  };

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
          <SignInButton
            variant="primary"
            disabled={isLoading}
            onPress={handleSubmit(handleSignIn)}>
            <Typographic.Title color="background">Entrar</Typographic.Title>
          </SignInButton>
        </SigInContent>
      </SigInContainer>
    </BaseScreen>
  );
};
