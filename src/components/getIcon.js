import React from 'react';
import './Icon-app.css';// Tell Webpack this JS file uses this image
class GetIcon extends React.Component {
	render() {
    const icon=this.props.icon;
    console.log(`${icon}`);
    const  handle =`http://openweathermap.org/img/wn/${icon}@2x.png`;
    return (
    <img className="img-icon" src={handle}  alt="Logo" />
    );
	}
}
export default GetIcon;