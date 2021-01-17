import React from 'react';
import useToggle from '../../hooks/useToggle';
import Navigation from '../../components/organisms/Navigation';
import Header from '../../components/organisms/Header';
import memoDatas from '../../model/memoData';
import styled from 'styled-components';

interface Props {
  datas: Array<memoDatas>;
  pageName: string;
  children?: React.ReactNode;
}

const Templates = ({ datas, pageName, children }: Props) => {
  // Toggle Navigation
  const [openNav, toggleNav] = useToggle();

  return (
    <Main open={openNav}>
      <Navigation open={openNav} datas={datas} />
      <Header onToggle={toggleNav} pageName={pageName} />
      {children}
    </Main>
  );
};

const Main = styled.main<{ open: boolean }>`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 80%;
  transition: width 0.5s ease;
  width: ${(props) => (props.open ? 'calc(100% - 280px);' : '100%')};
`;

export default Templates;
