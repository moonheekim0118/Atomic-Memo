import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import * as Pages from './pages';
import { createGlobalStyle } from 'styled-components';
const Root = () => {
  return (
    <Suspense fallback={<div>...loading</div>}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/trash" exact component={Pages.Trash} />
          <Route path="/write" exact component={Pages.Write} />
          <Route path="/" exact component={Pages.Home} />
          <Route path="/:id" exact component={Pages.Home} />
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
