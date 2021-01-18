import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMemoAction, loadTrashAction } from '../../actions/memo';
import useToggle from '../../hooks/useToggle';
import Navigation from '../../components/organisms/Navigation';
import Header from '../../components/organisms/Header';
import styled from 'styled-components';

interface Props {
  pageName: string;
  children?: React.ReactNode;
  type: 'memos' | 'trash';
}

const Templates = ({ pageName, children, type }: Props) => {
  // Toggle Navigation
  const dispatch = useDispatch();
  const { memos, trash } = useSelector((state) => state.memo);
  const [openNav, toggleNav] = useToggle();

  useEffect(() => {
    if (type === 'memos') {
      return dispatch(loadMemoAction());
    }
    dispatch(loadTrashAction());
  }, []);

  return (
    <Main open={openNav}>
      <Navigation open={openNav} datas={type === 'memos' ? memos : trash} />
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
