import React from 'react';
import PropTypes from 'prop-types';

const WeatherMessage = (props) => {
  const { temp, location, weather, error } = props;

  if (temp && location && weather) {
    return <h3 className="msg">It's {temp}°C, {weather} in {location}.</h3>;
  } else if (error) {
    return <h3 className="error">{ error }</h3>;
  }
  return null;
};

WeatherMessage.propTypes = {
  temp: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};


export default WeatherMessage;
