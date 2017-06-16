const React = require('react');
const WeatherMessage = require('WeatherMessage');
const WeatherForm = require('WeatherForm');
const openWeatherMap = require('openWeatherMap');

const Weather = React.createClass({

	getInitialState: function() {
		return {
			isLoading: false
		}
	},
	handleNewSearch: function (location) {
		const that = this;
		this.setState({
			isLoading: true
		});
		
		openWeatherMap.getTemp(location).then(function(temp) {
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function(errorMessage) {
			that.setState({
				isLoading: false
			});
			alert(errorMessage);
		});
	},

	render: function() {
		const {isLoading, location, temp} = this.state;
		function renderMessage() {
			if (isLoading) {
				return <h3 class="text-center">Loading ...</h3>;
			} else if (temp && location) {
				return  <WeatherMessage location={location} temp={temp}/>

			}
		}
		
		return (
			<div>
				<h1 className="text-center">Get Weather</h1>
				<WeatherForm location={location} onSearch={this.handleNewSearch}/>
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;