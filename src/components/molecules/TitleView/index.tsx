import React from 'react';
import Span from '../../atoms/Span';
import styled from 'styled-components';

interface Props {
  text: string;
  time: string;
}

const TitleView = ({ text, time }: Props) => {
  return (
    <StyledTitleView>
      <Span size="title">{text}</Span>
      <Span size="small">{time}</Span>
    </StyledTitleView>
  );
};

const StyledTitleView = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: column;
`;
export default TitleView;
