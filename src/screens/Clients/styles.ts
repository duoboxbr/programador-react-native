import {FlatList, FlatListProps} from 'react-native';
import styled from 'styled-components/native';

import {Button} from '../../components/Button';

import {ClientRecords} from '../../services/getClients/types';

export const SearchContainer = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const SearchButton = styled(Button)`
  height: 50px;
`;

export const ItemSeparator = styled.View`
  height: 10px;
  background-color: 'transparent';
`;

export const ClientList = styled(
  FlatList as new (
    props: FlatListProps<ClientRecords>,
  ) => FlatList<ClientRecords>,
).attrs({
  contentContainerStyle: {
    paddingTop: 16,
  },
})`
  flex: 1;
`;
