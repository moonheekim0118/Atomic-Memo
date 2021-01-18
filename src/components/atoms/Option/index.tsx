import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  dataName: string;
}

const Option = ({ children, dataName }: Props) => {
  return (
    <StyledOption data-name={dataName} className="select-option">
      {children}
    </StyledOption>
  );
};

const StyledOption = styled.li`
  background-color: #3399ff;
  padding: 0.7em;

  transition: background-color 0.5s ease;
  &:hover {
    background-color: #66ccff;
  }
`;
export default Option;
