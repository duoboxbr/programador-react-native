import styled from 'styled-components/native';
import {Button} from '../../../../components/Button';
import {CircleStatusProps} from './types';

export const BankSlipRowContainer = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.backgroundLight};
  padding: 8px;
  border-radius: ${({theme}) => theme.radii.sm};
  margin-bottom: 4px;
`;

export const BankSlipRowContent = styled.View`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

export const BankSlipRowDetails = styled.View``;

export const ButtonAction = styled(Button)`
  flex: 1;
  margin-top: 14px;
`;

export const CircleStatus = styled.View<CircleStatusProps>`
  height: 16px;
  width: 16px;
  border-radius: 16px;
  background-color: ${({theme, status}) =>
    status === '0' ? theme.colors.redLight : theme.colors.greenLight};
`;
