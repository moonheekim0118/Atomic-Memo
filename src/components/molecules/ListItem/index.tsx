import React from 'react';
import Span from '../../atoms/Span';
import MemoTitle from '../MemoTitle';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  title: string;
  time: string;
  kind: string;
  path: string;
}

const ListItem = ({ title, time, kind, path }: Props) => {
  const location = useLocation();

  return (
    <StyledListItem to={path} visiting={location.pathname === path}>
      <MemoTitle title={title} kind={kind} />
      <Span size="small" padding="2em 1em">
        {time}
      </Span>
    </StyledListItem>
  );
};

const StyledListItem = styled<{ visiting: boolean }>(Link)`
  display: flex;
  justify-content: space-between;
  text-decoration: none;

  width: 100%;
  height: 90px;
  text-align: center;
  background-color: ${(props) => (props.visiting ? '#f4f4f4' : '#fff')};

  transition: background-color 0.5s ease;
  &:hover {
    background-color: #f4f4f4;
  }
`;

export default ListItem;
