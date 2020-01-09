import React from 'react';
import './Icon-app.css'; // Tell Webpack this JS file uses this image
class getIcon extends React.Component {
	render() {
		const icon = this.props.icon;
		const handle = `http://openweathermap.org/img/wn/${icon}@2x.png`;
		return <div className="div-icon"><img className="img-icon" src={handle} alt="Logo" /></div>;
	}
}
export default getIcon;
