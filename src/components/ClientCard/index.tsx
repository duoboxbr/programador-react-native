import React from 'react';
import {Typographic} from '../Typographic';

import {
  ClientCardContainer,
  ClientContent,
  ClientName,
  GridClientColumn,
  GridClientInfo,
  StatusContent,
} from './styles';

import type {ClientCardProps} from './types';

export const ClientCard: React.FC<ClientCardProps> = ({
  name,
  plan,
  service,
  active,
  ...rest
}) => {
  return (
    <ClientCardContainer {...rest}>
      <ClientContent>
        <ClientName>{name}</ClientName>
        <GridClientInfo>
          <GridClientColumn>
            <Typographic.Text>Plano</Typographic.Text>
            <Typographic.Text color="titleText">{plan}</Typographic.Text>
          </GridClientColumn>
          <GridClientColumn>
            <Typographic.Text>Serviço</Typographic.Text>
            <Typographic.Text color="titleText">{service}</Typographic.Text>
          </GridClientColumn>
        </GridClientInfo>
      </ClientContent>
      <StatusContent active={active} />
    </ClientCardContainer>
  );
};
