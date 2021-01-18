import React from 'react';
import TitleView from '../../molecules/TitleView';
import MainView from '../../molecules/MainView';
import styled from 'styled-components';

interface Props {
  title: string;
  time: string;
  main: string;
}

const MemoView = ({ title, time, main }: Props) => {
  return (
    <StyledMemoView>
      <TitleView text={title} time={time} />
      <MainView text={main} />
    </StyledMemoView>
  );
};

const StyledMemoView = styled.section`
  height: 100%;
`;

export default MemoView;
