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
			errorMessage: undefined,
			location: undefined,
			temp: undefined
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
	componentDidMount: function() {
		const locations = this.props.location.query.location;
		
		if (locations && locations.length > 0) {
			this.handleNewSearch(locations);
			window.location.hash = '#/';
		}
	},
	componentWillReceiveProps: function (newProps) {
		const locations = newProps.location.query.location;

		if (locations && locations.length > 0) {
			this.handleNewSearch(locations);
			window.location.hash = '#/';
		}
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
				<h1 className="text-center page-title">Get Weather</h1>
				<WeatherForm location={location} onSearch={this.handleNewSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
});

module.exports = Weather;