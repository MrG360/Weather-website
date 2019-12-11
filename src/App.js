import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import LeftWeather from './components/LeftWeather';
import RightWeather from './components/RightWeather';
import Comments from './components/Comments';
import './App.css';

const API_KEY = 'd72ea79d6b0aebe78cf24341141aa15a';
class App extends React.Component {
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
	getWeather = async e => {
		this.setState({
			saveStatus: 'Loading',
		});
		const city = e.target.elements.city.value;
		console.log(city + 'hello');
		e.preventDefault();
		const respond = await fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
		);
		const data = await respond.json();
		console.log(data);
		if (data.cod === '404') {
			this.setState({
				saveStatus: 'notFound',
			});
		} else {
			this.setState({
				temperature: data.main.temp,
				city: data.name,
				country: data.sys.country,
				date: data.name,
				icon: data.weather[0].icon,
				weather: data.weather[0].description,
				wind: data.wind.speed,
				humidity: data.main.humidity,
				pressure: data.main.pressure,
				maxTemp: data.main.temp_max,
				minTemp: data.main.temp_min,
				sunrise: data.sys.sunrise,
				sunset: data.sys.sunset,
				saveStatus: 'Success',
			});
		}
	};

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
