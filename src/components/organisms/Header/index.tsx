import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Span from '../../atoms/Span';
import Button from '../../atoms/Button';

interface Props {
  onToggle?: (e: React.MouseEvent<HTMLSpanElement>) => void;
  pageName: string;
}
const Header = ({ onToggle, pageName }: Props) => {
  return (
    <StyledHeader>
      <Button onClick={onToggle} color="#3399ff">
        Menu
      </Button>
      <Span>{pageName}</Span>
      {pageName === 'Home' ? (
        <Link to="/trash">
          <Span>Trash</Span>
        </Link>
      ) : (
        <Link to="/">
          <Span>Home</Span>
        </Link>
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;

  height: 70px;
  border-bottom: 1px solid #f4f4f4;
`;

export default Header;
