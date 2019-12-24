import React from 'react';
class RightWeather extends React.Component {
	// Function to calculate Sunrise and Sunset
	msToTime = duration => {
		var seconds = Math.floor((duration / 1000) % 60);
		var minutes = Math.floor((duration / (1000 * 60)) % 60);
		var hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

		hours = hours < 10 ? '0' + hours : hours;
		minutes = minutes < 10 ? '0' + minutes : minutes;
		seconds = seconds < 10 ? '0' + seconds : seconds;

		return hours + ':' + minutes + ':' + seconds;
	};

	//RighWeather UI
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
							Max Temp : {this.props.maxTemp}
							<sup>o</sup>C
						</h4>{' '}
					</div>
					<div>
						<h4>
							Min Temp : {this.props.minTemp}
							<sup>o</sup>C
						</h4>{' '}
					</div>
				</div>
				<div className="div-right-content">
					<div>
						<h4>Sunrise : {this.msToTime(this.props.sunrise)}</h4>{' '}
					</div>
					<div>
						<h4>Sunset : {this.msToTime(this.props.sunset)}</h4>{' '}
					</div>
				</div>
			</div>
		);
	}
}
export default RightWeather;
