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
        // take the id of the first response we
        //encounter and find the weather for it
        fetchWeather(response[0]['woeid'], callback);
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
      if (callback) callback(response);
    });
};
