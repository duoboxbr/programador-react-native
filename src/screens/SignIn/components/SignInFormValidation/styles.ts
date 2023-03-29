import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 14px;
  height: 60px;
`;

export const Error = styled.Text`
  width: 100%;
  height: 100%;
  font-size: ${({theme}) => theme.fontSizes.text};
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.redLight};
`;
