import React from 'react';
import TitleText from '../../molecules/TitleText';
import MainText from '../../molecules/MainText';
import Button from '../../atoms/Button';
import styled from 'styled-components';

const MemoEditor = () => {
  return (
    <StyledMemoEditor>
      <TitleText />
      <MainText />
      <Button color="#3399ff">save</Button>
    </StyledMemoEditor>
  );
};

const StyledMemoEditor = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2em 0.5em;
`;

export default MemoEditor;
