import React, { Component } from 'react';
import WeatherMessage from './WeatherMessage';
import Countries from './Countries';
import { getTemp } from '../api/API';

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      country: '',
      location: '',
      temp: 0,
      error: '',
      weather: '',
    };
  }
  render() {
    return (
      <div className="wrapper">
        <div className="box">
          <h3 className="title">Get Weather</h3>
{/* A bind call function in a JSX prop will create a brand new function on
every single render. This is bad for performance, as it will result in the garbage
collector being invoked way more than is necessary. Because of this, I opted to
leave the entire callback in onSubmit. */}
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              const { city, country } = this.state;
              if (city && country) {
                getTemp(city, country).then((data) => {
                  this.setState({
                    location: data.list[0].name,
                    temp: data.list[0].main.temp,
                    weather: data.list[0].weather[0].description
                  })
                }), error => that.setState({ error });
              }
              this.setState({
                city: '',
                country: '',
              });
            }
            }
          >
            {/* Controled inputs */}
            <input
              type="text"
              value={this.state.country}
              onChange={e => this.setState({ country: e.target.value })}
              placeholder="Enter city name"
            />
            <Countries
              value={this.state.city}
              onChange={e => this.setState({ city: e.target.value })}
            />
            <button type="submit">Get Weather</button>
          </form>
          <WeatherMessage
            temp={this.state.temp}
            location={this.state.location}
            weather={this.state.weather}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}
