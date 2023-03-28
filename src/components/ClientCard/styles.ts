import styled from 'styled-components/native';

import {Typographic} from '../Typographic';

import {ClientActiveStatusProps} from './types';

export const ClientCardContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: ${({theme}) => theme.radii.lg};
  background-color: ${({theme}) => theme.colors.backgroundLight};
  overflow: hidden;
`;

export const ClientContent = styled.View`
  padding: 8px;
`;

export const StatusContent = styled.View<ClientActiveStatusProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  background-color: ${({theme, active}) =>
    active ? theme.colors.greenLight : theme.colors.redLight};
  width: 100%;
  height: 100%;
  max-width: 10px;
`;

export const ClientName = styled(Typographic.Title)`
  padding-bottom: 4px;
`;

export const GridClientInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const GridClientColumn = styled.View`
  display: flex;
`;
