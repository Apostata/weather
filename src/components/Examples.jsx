import React from 'react';
import { Link } from 'react-router-dom';

const Examples = () => (
  <div className="wrapper">
    <div className="box">
      <h3 className="title">Examples</h3>
      <p className="content-box">Here are a few example locations to try out:</p>
      <ul className="links">
        <li className="links-examples">
          <Link to="/?Rio de Janeiro,BR">Rio de Janeiro, BR</Link>
        </li>
        <li className="links-examples">
          <Link to="/?New York,US">New York, US</Link>
        </li>
        <li className="links-examples">
          <Link to="/?London,GB">London, GB</Link>
        </li>
        <li className="links-examples">
          <Link to="/?Quebec,CA">Quebec, CA</Link>
        </li>
        <li className="links-examples">
          <Link to="/?Tokyo,JP">Tokyo, JP</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Examples;
