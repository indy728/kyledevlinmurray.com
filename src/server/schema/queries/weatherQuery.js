const axios = require('axios');

const openWeatherAPIKey = process.env.REACT_APP_WEATHER_API_KEY;
const weatherUrl = (zipcode) => `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${openWeatherAPIKey}&units=imperial`;

const weatherGet = (zipcode) => {
  const wurl = weatherUrl(zipcode);

  const options = {
    method: 'get',
    url: wurl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  };

  return axios(options)
    .then((res) => res.data)
    .catch((er) => {
      throw (er);
    });
};

module.exports = weatherGet;
