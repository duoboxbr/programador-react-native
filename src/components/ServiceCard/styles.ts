import styled from 'styled-components/native';

export const ServiceDetailsCardContainer = styled.View`
  display: flex;
  flex: 1;
  padding: 8px;

  border-radius: ${({theme}) => theme.radii.lg};
  background-color: ${({theme}) => theme.colors.backgroundLight};
  overflow: hidden;
  margin-bottom: 8px;
`;

export const ButtonContainer = styled.View`
  padding: 8px 0px;
  width: 50%;
  align-self: flex-end;
`;
