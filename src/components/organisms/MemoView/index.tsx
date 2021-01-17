import React from 'react';
import TitleView from '../../molecules/TitleView';
import MainView from '../../molecules/MainView';
import styled from 'styled-components';

const MemoView = () => {
  return (
    <StyledMemoView>
      <TitleView text="우하하하하" time="2020-12-30" />
      <MainView text="ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ" />
    </StyledMemoView>
  );
};

const StyledMemoView = styled.section`
  height: 100%;
`;

export default MemoView;
