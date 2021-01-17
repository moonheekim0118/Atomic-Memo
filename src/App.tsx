import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Home, Trash } from './pages';

const Root = () => {
  return (
    <Suspense fallback={<div>...loading</div>}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={Trash} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default Root;
