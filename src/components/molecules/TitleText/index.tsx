import React from 'react';
import useValidation from '../../../hooks/useValidation';
import styled from 'styled-components';
import Textarea from '../../atoms/Textarea';
import Span from '../../atoms/Span';

const TitleText = () => {
  const [value, onChange, error] = useValidation({ max: 40, min: 1 });

  return (
    <StyledTitleText>
      <Textarea value={value} onChange={onChange} size="title" />
      <Count>
        <Span color={error ? 'red' : 'black'}>{`${value.length}/40`}</Span>
      </Count>
    </StyledTitleText>
  );
};

const StyledTitleText = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #f4f4f4;
`;

const Count = styled.div`
  position: absolute;
  top: -23px;
  left: 10px;
`;

export default TitleText;
