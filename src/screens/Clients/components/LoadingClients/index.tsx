import React from 'react';

import {Typographic} from '../../../../components/Typographic';
import {LoadingClientsContainer} from './styles';

export const LoadingClients: React.FC = () => {
  return (
    <LoadingClientsContainer>
      <Typographic.Title color="titleText">
        Aguarde, carregando!
      </Typographic.Title>
    </LoadingClientsContainer>
  );
};
