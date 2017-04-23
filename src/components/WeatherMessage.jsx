import React from 'react';
import PropTypes from 'prop-types';

const WeatherMessage = (props) => {
  const { temp, location, weather, error } = props;
  if (!temp && !location) {
    return null;
  } else if (error) {
    return <p>{ error }</p>;
  }
  return (
    <div>
      <h3>It's {temp}°C, {weather} in {location}.</h3>
    </div>
  );
};

WeatherMessage.propTypes = {
  temp: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};


export default WeatherMessage;
