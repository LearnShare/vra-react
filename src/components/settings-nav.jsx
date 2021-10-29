import React from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';

function PageSettingsNav({
  match,
}) {
  const {
    path,
  } = match;

  return (
    <ul>
      <li>
        <Link
            to={ `${path}/profile` }>Profile</Link>
      </li>
      <li>
        <Link
            to={ `${path}/notification` }>Notification</Link>
      </li>
    </ul>
  );
}

export default withRouter(PageSettingsNav);
