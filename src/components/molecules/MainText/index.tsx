import React from 'react';
import useValidation from '../../../hooks/useValidation';
import styled from 'styled-components';
import Textarea from '../../atoms/Textarea';
import Span from '../../atoms/Span';

const MainText = () => {
  const [value, onChange, error] = useValidation({ max: 500, min: 0 });

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
