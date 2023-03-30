import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 8px 0px;
`;

export const FormContainer = styled.View`
  margin: 8px 0px;
  gap: 8px;
`;

export const Form = styled.View`
  width: 100%;
  height: 70px;
`;

export const ButtonContainer = styled.View`
  width: 50%;
  align-self: flex-end;
`;

export const Error = styled.Text`
  width: 100%;
  font-size: ${({theme}) => theme.fontSizes.text};
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.redLight};
`;
