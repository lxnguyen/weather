const React = require('react');
const WeatherMessage = require('WeatherMessage');
const WeatherForm = require('WeatherForm');
const ErrorModal = require('ErrorModal');
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
			isLoading: true,
			errorMessage: undefined
		});
		
		openWeatherMap.getTemp(location).then(function(temp) {
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function(e) {
			that.setState({
				isLoading: false,
				errorMessage: e.message
			});
		});
	},

	render: function() {
		const {isLoading, location, temp, errorMessage} = this.state;
		function renderMessage() {
			if (isLoading) {
				return <h3 className="text-center">Loading ...</h3>;
			} else if (temp && location) {
				return  <WeatherMessage location={location} temp={temp}/>

			}
		}
		
		function renderError() {
			if (typeof errorMessage === 'string') {
				return (
					<ErrorModal message={errorMessage}/>
				)
			}
		}
		
		return (
			<div>
				<h1 className="text-center">Get Weather</h1>
				<WeatherForm location={location} onSearch={this.handleNewSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
});

module.exports = Weather;