import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Home, Trash } from './pages';
import { createGlobalStyle } from 'styled-components';

const Root = () => {
  return (
    <Suspense fallback={<div>...loading</div>}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/:id" exact component={Home} />
          <Route path="/about" exact component={Trash} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

const GlobalStyle = createGlobalStyle`
    body{
        box-sizing:border-box;
        margin:0;
        padding:0;
        font-family: 'Montserrat', sans-serif;
    }
`;

export default Root;
