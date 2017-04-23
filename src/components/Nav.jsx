import React from 'react';
import { NavLink } from 'react-router-dom';

// NavLink is a special version of the <Link> that will add styling attributes
// to the rendered element when it matches the current URL.

const Nav = () => (
  <div>
    <ul>
      <li>
        <NavLink exact activeClassName="active" to="/">Get Weather</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/about">About</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/examples">Examples</NavLink>
      </li>
    </ul>
  </div>
);

export default Nav;
