const React = require('react');

const WeatherMessage = (props) => {
	const {location, temp} = props;
	return (
		<div>
			<h3>It's {temp} in {location}</h3>
		</div>
	);
}

module.exports = WeatherMessage;