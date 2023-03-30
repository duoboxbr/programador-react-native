import React from 'react';
import {Typographic} from '../../Typographic';

import {GroupContainer} from './styles';

import type {} from './types';
import {GroupContainerProps} from './types';

export const GroupContent: React.FC<GroupContainerProps> = ({
  title,
  content,
}) => {
  return (
    <GroupContainer>
      <Typographic.SubTitle>{title}</Typographic.SubTitle>
      <Typographic.Title>{content}</Typographic.Title>
    </GroupContainer>
  );
};
