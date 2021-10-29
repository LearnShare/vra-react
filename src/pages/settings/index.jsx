import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';

import PageSettingsNav from '../../components/settings-nav';
import PageSettingsProfile from './profile';
import PageSettingsNotification from './notification';

function PageSettings({
  match,
}) {
  const {
    path,
  } = match;

  return (
    <div>
      <h3>page-settings</h3>
      <PageSettingsNav />
      <hr />
      <Switch>
        <Route
            path={ `${path}/profile` }
            exact>
          <PageSettingsProfile />
        </Route>
        <Route
            path={ `${path}/notification` }
            exact>
          <PageSettingsNotification />
        </Route>
        <Redirect
            from="*"
            to={ `${path}` } />
      </Switch>
    </div>
  );
}

export default withRouter(PageSettings);
