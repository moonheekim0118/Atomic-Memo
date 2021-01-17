import React from 'react';
import Span from '../../atoms/Span';
import Button from '../../atoms/Button';
import styled from 'styled-components';

interface Props {
  text: string;
}

const MainView = ({ text }: Props) => {
  return (
    <StyledMainView>
      <ButtonContainer>
        <Button color="green">Update</Button>
        <Button color="red">Remove</Button>
      </ButtonContainer>
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

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 30px;
  right: 10%;
  width: 200px;

  display: flex;
  justify-content: space-between;
`;

export default MainView;
