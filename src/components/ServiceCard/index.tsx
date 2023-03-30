import React from 'react';
import {formatCnpj, formatCpf} from '../../util/documentParser';
import {Button} from '../Button';
import {Typographic} from '../Typographic';
import {GroupContent} from './GroupContent';

import {ServiceDetailsCardContainer, ButtonContainer} from './styles';

import type {ServiceDetailsCardProps} from './types';

export const ServiceCard: React.FC<ServiceDetailsCardProps> = ({
  address,
  addressNumber,
  city,
  cnpj,
  cpf,
  email,
  fantasyName,
  name,
  neighborhood,
  state,
  typePerson,
  onPress,
}) => {
  const typePersonMapping = {
    F: 'Física',
    J: 'Jurídica',
  }[typePerson];

  const documentMapping = {
    F: formatCpf(cpf),
    J: formatCnpj(cnpj),
  }[typePerson];

  return (
    <ServiceDetailsCardContainer>
      <GroupContent title="Tipo pessoa" content={typePersonMapping} />
      <GroupContent title="Documento" content={documentMapping} />
      <GroupContent title="Nome" content={name} />
      {typePerson === 'J' && (
        <GroupContent title="Nome fantasia" content={fantasyName} />
      )}
      {email && <GroupContent title="Email" content={email} />}
      <GroupContent
        title="Endereço"
        content={addressNumber ? `${address}, ${addressNumber}` : `${address}`}
      />
      <GroupContent title="Cidade" content={city} />
      <GroupContent title="Estado" content={state} />
      <GroupContent title="Bairro" content={neighborhood} />
      <ButtonContainer>
        <Button variant={'secondary'} onPress={onPress}>
          <Typographic.Text color="titleText">Ver boletos</Typographic.Text>
        </Button>
      </ButtonContainer>
    </ServiceDetailsCardContainer>
  );
};
