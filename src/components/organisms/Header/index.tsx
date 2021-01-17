import React from 'react';
import styled from 'styled-components';
import Span from '../../atoms/Span';
import Button from '../../atoms/Button';

interface Props {
  navOpen: boolean;
  onToggle?: (e: React.MouseEvent<HTMLSpanElement>) => void;
  pageName: string;
}
const Header = ({ navOpen, onToggle, pageName }: Props) => {
  return (
    <StyledHeader navOpen={navOpen}>
      <Button onClick={onToggle}>메뉴</Button>
      <Span>{pageName}</Span>
      <Span>Home</Span>
    </StyledHeader>
  );
};

const StyledHeader = styled.header<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;

  transition: width 0.5s ease;
  width: ${(props) => (props.navOpen ? 'calc(100% - 280px);' : '100%')};
  height: 70px;
  border-bottom: 1px solid #f4f4f4;
`;

export default Header;
