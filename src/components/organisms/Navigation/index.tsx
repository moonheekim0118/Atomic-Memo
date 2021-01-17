import React from 'react';
import MemoData from '../../../model/memoData';
import ListItem from '../../molecules/ListItem';
import styled from 'styled-components';

interface Props {
  open: boolean;
  datas: Array<MemoData>;
}

const Navigation = ({ open, datas }: Props) => {
  const List = datas.map((v, i) => (
    <ListItem
      key={v.id}
      title={v.title}
      time={v.time}
      kind={v.kind}
      path={`/${v.id}`}
    />
  ));
  return <StyledNavigation open={open}>{List}</StyledNavigation>;
};

const StyledNavigation = styled.nav<Props>`
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 280px;
  background-color: #fff;

  border: 1px solid #e0e0d1;
  transition: transform 0.5s ease;
  transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(-100%)')};
  overflow-y: auto;

  scrollbar-width: none;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export default Navigation;
