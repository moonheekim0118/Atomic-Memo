import React from 'react';
import styled from 'styled-components';
import Span from '../../atoms/Span';
import MemoKind from '../../../util/memoKind';

interface Props {
  title: string;
  kind: string;
}

const MemoTitle = ({ title, kind }: Props) => {
  return (
    <StyledMemoTitle>
      <Span size="small" padding="0 0.5em 0 0">
        {MemoKind[kind]}
      </Span>
      <Span size="small" width="5.5em">
        {title}
      </Span>
    </StyledMemoTitle>
  );
};

const StyledMemoTitle = styled.div`
  display: flex;
  padding: 2em;
`;

export default MemoTitle;
