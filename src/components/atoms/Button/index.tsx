import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  color?: string;
  onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

const Button = ({ children, color, onClick }: Props) => {
  return (
    <StyledButton onClick={onClick} color={color}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ color: string }>`
  background-color: #fff;
  color: ${(props) => props.color};
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.3em;
  border: 2px solid #f4f4f4;
  border-radius: 10px;

  cursor: pointer;

  transition: all 0.5s ease;

  &:hover {
    background-color: ${(props) => props.color};
    border-color: ${(props) => props.color};
    color: #fff;
  }
  &:focus {
    outline: none;
  }
`;

export default Button;
