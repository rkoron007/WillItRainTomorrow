require('es6-promise').polyfill();
require('isomorphic-fetch');


export const fetchLocation = (data, callback) => {
    fetch(`/api/location/${data}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    })
  	.then((response) => {
  		if (response.status >= 400) {
  			throw new Error("Bad response from server");
  		}
  		return response.json();
  	})
  	.then((response) => {
      // if we have a response then use that response's
      // identifying woeid to look up the weather
      return response[0] ?
      fetchWeather(response[0]['woeid'], callback):
      //otherwise return an error
      callback("Please Enter a Valid City.");
    });
};

export const fetchWeather = (woeid, callback) => {
  fetch(`/api/weather/${woeid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
  })
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then((response) => {
      let raining = isRaining(response);
      if (callback) callback(raining);
    });
};

//check the given abbreviation and see if it matches any of the
// raining abbreviations

export const isRaining = (weather) => {
  // grab the weather for tomorrow
  let tomorrow = weather['consolidated_weather'][1];
  let abbreviation = tomorrow['weather_state_abbr'];
  console.log(abbreviation);
  const rains = ['h','t','hr','lr','s','sl'];
  if (rains.includes(abbreviation)) {
    return true;
  }
  return false;
};
