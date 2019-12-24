import React from 'react';
import logo from './logo.png'; // Tell Webpack this JS file uses this image
class getIcon extends React.Component {
	render() {
    const icon=this.props.icon;
    console.log(icon);
    const { handle } =`http://openweathermap.org/img/wn/"+${icon}+"@2x.png`;
    return (<img src={handle} alt="Logo" />);
	}
}
export default getIcon;