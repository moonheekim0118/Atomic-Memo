import React from 'react';
import useToggle from '../../hooks/useToggle';
import Navigation from '../../components/organisms/Navigation';
import Header from '../../components/organisms/Header';
import memoDatas from '../../model/memoData';

interface Props {
  datas: Array<memoDatas>;
  pageName: string;
  children?: React.ReactNode;
}

const Templates = ({ datas, pageName, children }: Props) => {
  // Toggle Navigation
  const [openNav, toggleNav] = useToggle();

  return (
    <>
      <Header navOpen={openNav} onToggle={toggleNav} pageName={pageName} />
      <Navigation open={openNav} datas={datas} />
      {children}
    </>
  );
};

export default Templates;
