import React from 'react';
import styled from 'styled-components';
import Textarea from '../../atoms/Textarea';
import Span from '../../atoms/Span';

interface Props {
  value: string;
  onChange: (e: React.MouseEvent) => void;
  error: boolean;
}

const MainText = ({ value, onChange, error }: Props) => {
  return (
    <StyledMainText>
      <Textarea value={value} onChange={onChange} size="main" />
      <Span color={error ? 'red' : 'black'}>{`${value.length}/500`}</Span>
    </StyledMainText>
  );
};

const StyledMainText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3em 0;
`;

export default MainText;
