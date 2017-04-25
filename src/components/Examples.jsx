import React from 'react';
import { Link } from 'react-router-dom';

const Examples = () => (
  <div className="wrapper">
    <div className="box">
      <h3 className="title">Examples</h3>
      <p className="content-box">Here are a few example locations to try out:</p>
      <ul className="links">
        <li>
          <Link to="/?city=Rio de Janeiro,country=BR">Rio de Janeiro, BR</Link>
        </li>
        <li>
          <Link to="/?city=New York,country=US">New York, US</Link>
        </li>
        <li>
          <Link to="/?city=London,country=GB">London, GB</Link>
        </li>
        <li>
          <Link to="/?city=Quebec,country=CA">Quebec, CA</Link>
        </li>
        <li>
          <Link to="/?city=Tokyo,country=JP">Tokyo, JP</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Examples;
