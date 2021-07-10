import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Auth from './pages/Auth'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/auth" />
        <Route path='/auth' component={Auth} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
