import React, { Component } from 'react';
import WeatherMessage from './WeatherMessage';
import Countries from './Countries';
import { getTemp, getTempNavBar } from '../api/API';

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

  componentDidMount() {
    const navBarQuery = this.props.location.search;
    const query = navBarQuery.substr(1, navBarQuery.length - 1);

    if (navBarQuery && navBarQuery.length > 0) {
      getTempNavBar(query).then((data) => {
        if (data === 'City Not Found') {
          return this.setState({ error: data });
        }
        this.setState({
          location: data.list[0].name,
          temp: data.list[0].main.temp,
          weather: data.list[0].weather[0].description,
          error: '',
        });
      }), error => this.setState({ error });
    }
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
              if (!city) {
                this.setState({
// Resetting weather, temp, and location is for user errors in new searches:
                  location: '',
                  temp: 0,
                  error: 'Please select a city',
                  weather: '',
                });
                document.getElementById('City').classList.add('input-error')
              } else if (city && !country) {
                this.setState({
                  location: '',
                  temp: 0,
                  error: 'Please select a country',
                  weather: '',
                 });
                 document.getElementById('City').classList.toggle('input-error')
                 document.getElementById('Country').classList.add('input-error')
              } else if (city && country) {
                getTemp(city, country).then((data) => {
// The API doesn't return a error when not found a city:
                  if (data === 'City Not Found') {
                    return this.setState({ error: data });
                  }
                  this.setState({
                    location: data.list[0].name,
                    temp: data.list[0].main.temp,
                    weather: data.list[0].weather[0].description,
                    city: '',
                    country: '',
                    error: '',
                  })
                  document.getElementById('City').classList.remove('input-error')
                  document.getElementById('Country').classList.remove('input-error')
                }), error => this.setState({ error });
              }
            }
          }
          >
            {/* Controled inputs */}
            <input
              type="text"
              id="City"
              value={this.state.city}
              onChange={e => this.setState({ city: e.target.value })}
              placeholder="Enter city name"
            />
            <Countries
              id="Country"
              value={this.state.country}
              onChange={e => this.setState({ country: e.target.value })}
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
