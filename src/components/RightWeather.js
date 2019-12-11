import React from "react";
class RightWeather extends React.Component{
    render(){
        return(
            <div className="App">
                <p>
                    {this.props.weather}
                    {this.props.wind}
                </p>
                <p>
                    {this.props.humidity} 
                    {this.props.pressure}
                </p>
                <p>
                    {this.props.maxTemp} 
                    {this.props.minTemp}
                </p>
                <p>
                    {this.props.sunrise} 
                    {this.props.sunset}
                </p>
            </div>
        );
    }
}
export default RightWeather;