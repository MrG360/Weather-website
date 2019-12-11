import React from 'react';
class RightWeather extends React.Component {
	returnSun = val => {
		let value = new Date(val);

		if (value.getHours() < 10) return '0' + value.getHours() + ':' + value.getMinutes() + ':' + value.getSeconds();
		else if (value.getMinutes() < 10)
			return value.getHours() + ':0' + value.getMinutes() + ':' + value.getSeconds();
		else if (value.getSeconds() < 10)
			return value.getHours() + ':' + value.getMinutes() + ':0' + value.getSeconds();
		else return value.getHours() + ':' + value.getMinutes() + ':' + value.getSeconds();
	};
	render() {
		return (
			<div className="wrapper right">
				<div className="div-right-content">
					<div>
						<h4>Weather : {this.props.weather}</h4>{' '}
					</div>
					<div>
						<h4>Wind : {this.props.wind} km/hr</h4>{' '}
					</div>
				</div>
				<div className="div-right-content">
					<div>
						<h4>Humidity : {this.props.humidity}%</h4>{' '}
					</div>
					<div>
						<h4>Pressure : {this.props.pressure} Pa</h4>{' '}
					</div>
				</div>
				<div className="div-right-content">
					<div>
						<h4>
							Max temperature : {this.props.maxTemp}
							<sup>o</sup>C
						</h4>{' '}
					</div>
					<div>
						<h4>
							Min Temperature : {this.props.minTemp}
							<sup>o</sup>C
						</h4>{' '}
					</div>
				</div>
				<div className="div-right-content">
					<div>
						<h4>Sunrise : {this.returnSun(this.props.sunrise)}</h4>{' '}
					</div>
					<div>
						<h4>Sunset : {this.returnSun(this.props.sunset)}</h4>{' '}
					</div>
				</div>
			</div>
		);
	}
}
export default RightWeather;
