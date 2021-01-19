import React from 'react';
import Templates from '../templates';
import { Link } from 'react-router-dom';
import Span from '../../components/atoms/Span';
import styled from 'styled-components';

const Home = () => {
  return (
    <Templates type="memos" pageName="Home">
      <Container>
        <StyledLink to="/write">
          <Span size="title">Write new Memo!✍️</Span>
        </StyledLink>
      </Container>
    </Templates>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
export default Home;
