import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  color?: string;
  onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

const Button = ({ children, color, onClick }: Props) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

const StyledButton = styled.button``;

export default Button;
