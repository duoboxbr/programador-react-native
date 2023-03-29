import React from 'react';

import {Typographic} from '../../../../components/Typographic';
import {EmptyClientListContainer} from './styles';

export const EmptyClientList: React.FC = () => {
  return (
    <EmptyClientListContainer>
      <Typographic.Title color="titleText">
        A Lista está vazia!
      </Typographic.Title>
      <Typographic.SubTitle>Que tal fazer uma pesquisa?</Typographic.SubTitle>
    </EmptyClientListContainer>
  );
};
