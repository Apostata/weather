import axios from 'axios';

export function getTemp(city, country) {
// put your api key here:
  const API_KEY = ;
  const url = `http://api.openweathermap.org/data/2.5/find?q=${city},${country}&units=metric&appid=${API_KEY}`;

  return axios.get(url).then((res) => {
    return res.data;
  }).catch((error) => {
    throw new Error(error);
  });
}
