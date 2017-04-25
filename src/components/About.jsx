import React from 'react';

const About = () => (
  <div className="wrapper">
    <div className="box">
      <h3 className="title">About</h3>
      <p className="content-box">
        This is a Weather Application build on React and React-Router.
        The API is provided by OpenWeater. For more information, visit the links below:
      </p>
      <ul className="links">
        <li>
          <a href="https://facebook.github.io/react">React</a>
        </li>
        <li>
          <a href="https://github.com/ReactTraining/react-router">React-router</a>
        </li>
        <li>
          <a href="http://http://openweathermap.org/">OpenWeater</a>
        </li>
      </ul>
    </div>
  </div>
);

export default About;
