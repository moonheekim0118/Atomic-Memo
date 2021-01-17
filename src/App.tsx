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
          <Route path="/trash" exact component={Trash} />
          <Route path="/" exact component={Home} />
          <Route path="/:id" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

const GlobalStyle = createGlobalStyle`
     *{
        box-sizing:border-box;
        margin:0;
        padding:0;
        font-family: 'Montserrat', sans-serif;
    }
`;

export default Root;
