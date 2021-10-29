import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import AppNav from './components/app-nav';
import PageHome from './pages/home';
import PageAbout from './pages/about';
import PageStore from './pages/store';
import PageSettings from './pages/settings/index';
import Page404 from './pages/404';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppNav />
        <hr />
        <Switch>
          <Route
              path="/"
              exact>
            <PageHome />
          </Route>
          <Route
              path="/about">
            <PageAbout />
          </Route>
          <Redirect
              from="/shop"
              to="/store" />
          <Route
              path="/store">
            <PageStore />
          </Route>
          <Route
              path="/settings">
            <PageSettings />
          </Route>
          <Route
              path="*">
            <Page404 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
