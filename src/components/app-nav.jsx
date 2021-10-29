import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

function AppNav() {
  return (
    <ul>
      <li>
        <NavLink
            to="/">Home</NavLink>
      </li>
      <li>
        <NavLink
            to="/about">About</NavLink>
      </li>
      <li>
        <NavLink
            to="/shop">Shop</NavLink>
      </li>
      <li>
        <NavLink
            to="/settings">Settings</NavLink>
      </li>
    </ul>
  );
}

export default AppNav;
