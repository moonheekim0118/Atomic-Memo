import React from 'react';
import Span from '../../atoms/Span';
import styled from 'styled-components';

interface Props {
  text: string;
}

const MainView = ({ text }: Props) => {
  return (
    <StyledMainView>
      <Span size="normal" display="block">
        {text}
      </Span>
    </StyledMainView>
  );
};

const StyledMainView = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 2em;
`;

export default MainView;
