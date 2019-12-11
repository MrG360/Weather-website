import React from 'react';
class LeftWeather extends React.Component {
	stringUpdate = props => {
		if (this.props.city === undefined) return '';
		var date = new Date();
		console.log(date.getDate());
		return (
			this.props.city +
			', ' +
			this.props.country +
			',' +
			this.returnDay(date.getDay()) +
			' ' +
			(date.getMonth() + 1) +
			' ' +
			date.getDate() +
			' ' +
			date.getFullYear()
		);
	};
	returnDay = val => {
		if (val === 1) return ' Mon';
		else if (val === 2) return ' Tue';
		else if (val === 3) return ' Wed';
		else if (val === 4) return ' Thur';
		else if (val === 5) return ' Fri';
		else if (val === 6) return ' Sat';
		else return ' Sun';
	};
	render() {
		return (
			<div className="wrapper left">
				<div className="div-location">
					<span className="span-location">{this.stringUpdate()}</span>
				</div>
				<div className="div-left-temp">
					{this.props.temperature} <span className="degree"> &#176;</span>C {/* {this.props.icon} */}
				</div>
			</div>
		);
	}
}
export default LeftWeather;
