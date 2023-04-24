import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 14px;
  height: 60px;
  flex: 1;
`;

export const Error = styled.Text`
  font-size: ${({theme}) => theme.fontSizes.text};
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.redLight};
`;
