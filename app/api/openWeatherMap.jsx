const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=5e9e930c8e224a6701f9682eba045e44&units=imperial';

module.exports = {
	getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location);
		// Passing in the URL by referencing it by the name
		var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
		
		return axios.get(requestURL).then(function(res) {
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}, function(res) {
			throw new Error(res.data.message);
		})
	}
}