import React from 'react';
import Templates from '../templates';
import Span from '../../components/atoms/Span';
import styled from 'styled-components';

const Trash = () => {
  return (
    <Templates type="trash" pageName="trash">
      <Container>
        <Span size="title">Trash can♻️</Span>
      </Container>
    </Templates>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Trash;
