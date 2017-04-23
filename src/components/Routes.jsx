import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './Nav';
import Weather from './Weather';
import About from './About';
import Examples from './Examples';

// As a router is a component, if we want the nav to be always present, simply
// insert it as its child:

const Routes = () => (
  <Router>
    <div>
      <Nav />
      <Route exact path="/" component={Weather} />
      <Route path="/about" component={About} />
      <Route path="/examples" component={Examples} />
    </div>
  </Router>
);

export default Routes;
