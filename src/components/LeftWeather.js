import React from 'react';
import GetIcon from './getIcon';
class LeftWeather extends React.Component {
	//Top-Right side Date and Time
	stringUpdate = props => {
		if (this.props.city === undefined) return '';
		var date = new Date();
		return (
			this.props.city +
			', ' +
			this.props.country +
			',' +
			this.returnDay(date.getDay()) +
			' ' +
			this.returnMonth(date.getMonth()) +
			' ' +
			date.getDate() +
			' ' +
			date.getFullYear()
		);
	};

	//Function to calculate month
	returnMonth = val => {
		switch (val) {
			case 1:
				return 'Jan';
			case 2:
				return 'Feb';
			case 3:
				return 'Mar';
			case 4:
				return 'Apr';
			case 5:
				return 'May';
			case 6:
				return 'Jun';
			case 7:
				return 'Jul';
			case 8:
				return 'Aug';
			case 9:
				return 'Sep';
			case 10:
				return 'Oct';
			case 11:
				return 'Nov';
			case 12:
				return 'Dec';
			default:
				return '';
		}
	};

	//Function to calculate Day
	returnDay = val => {
		if (val === 1) return ' Mon';
		else if (val === 2) return ' Tue';
		else if (val === 3) return ' Wed';
		else if (val === 4) return ' Thu';
		else if (val === 5) return ' Fri';
		else if (val === 6) return ' Sat';
		else return ' Sun';
	};

	// Temperature Displays Here
	render() {
		return (
			<div className="wrapper left">
				<div className="div-location">
					<span className="span-location">{this.stringUpdate()}</span>
				</div>
				<div className="div-left-temp">
					<div>{this.props.temperature} </div>
					<div className="degree"> &#176;C</div>
					<GetIcon icon={this.props.icon} />
				</div>
			</div>
		);
	}
}
export default LeftWeather;
