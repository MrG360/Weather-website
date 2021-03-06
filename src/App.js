import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import LeftWeather from './components/LeftWeather';
import RightWeather from './components/RightWeather';
import Comments from './components/Comments';
// import getIcon from './components/getIcon';
import './App.css';

const API_KEY = 'd72ea79d6b0aebe78cf24341141aa15a';
class App extends React.Component {
	// Variables declared here
	state = {
		temperature: undefined,
		city: undefined,
		country: undefined,
		date: undefined,
		icon: undefined,
		weather: undefined,
		wind: undefined,
		humidity: undefined,
		pressure: undefined,
		maxTemp: undefined,
		minTemp: undefined,
		sunrise: undefined,
		sunset: undefined,
		error: undefined,
		saveStatus: '',
	};

	//Function for giving Api call to access Weather
	getWeather = async e => {
		this.setState({
			saveStatus: 'Loading',
		});
		const city = e.target.elements.city.value;
		//Check if city is null and you press enter.
		if (city === '') {
			this.setState({
				saveStatus: 'notFound',
			});
			e.preventDefault();
			return;
		}

		//To prevent refresh
		e.preventDefault();

		//Api call using try block
		try {
			var response = await fetch(
				`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
			);
			if (!response.ok) {
				throw new Error('No data has been received');
			}
		} catch (error) {
			console.log(error.message);
		}

		//Parsing Data
		const data = await response.json();
		console.log(data);
		if (data.cod === '404') {
			this.setState({
				saveStatus: 'notFound',
			});
		}
		//Setting variables after API call.
		else {
			this.setState({
				temperature: data.main.temp,
				city: data.name,
				country: data.sys.country,
				date: data.dt,
				icon: data.weather[0].icon,
				weather: data.weather[0].main,
				wind: data.wind.speed,
				humidity: data.main.humidity,
				pressure: data.main.pressure,
				maxTemp: data.main.temp_max,
				minTemp: data.main.temp_min,
				sunrise: new Date(data.sys.sunrise*1000).toLocaleTimeString(),
				sunset: new Date(data.sys.sunset*1000).toLocaleTimeString(),
				saveStatus: 'Success',
			});
		}
	};
	//Main Display
	renderDivTemp = () => {
		if (this.state.city === undefined) return '';
		else {
			return (
				<div className="div-wrapper-content">
					<LeftWeather
						className="wrapper left"
						temperature={this.state.temperature}
						date={this.state.date}
						country={this.state.country}
						city={this.state.city}
						icon={this.state.icon}
						error={this.state.error}
					/>

					<RightWeather
						className="wrapper right"
						weather={this.state.weather}
						wind={this.state.wind}
						humidity={this.state.humidity}
						pressure={this.state.pressure}
						maxTemp={this.state.maxTemp}
						minTemp={this.state.minTemp}
						sunrise={this.state.sunrise}
						sunset={this.state.sunset}
					/>
				</div>
			);
		}
	};

	//Comments Section
	renderDivTemp1 = () => {
		if (this.state.city === undefined) return '';
		else {
			return (
				<div className="div-wrapper-content">
					<Comments />
				</div>
			);
		}
	};
	render() {
		return (
			<div className="div-main">
				<Titles />
				<Form getWeather={this.getWeather} />
				<div style={{ marginBottom: '20px' }}>
					{this.state.saveStatus === 'Loading' && <div className="div-loading">Searching City name...</div>}
					{this.state.saveStatus === 'notFound' && <div className="div-notFound">City Name Not Found</div>}
				</div>
				{this.renderDivTemp()}
				{this.renderDivTemp1()}
			</div>
		);
	}
}

export default App;
