import React from "react";
class RightWeather extends React.Component{
    render(){
        return(
            <div className="wrapper right">
                <div className="div-right-content">
                    <div><h4>Weather : {this.props.weather}</h4> </div>
                    <div><h4>Wind : {this.props.wind}</h4> </div>
                </div>
                <div className="div-right-content">
                    <div><h4>Humidity : {this.props.humidity}</h4>  </div>
                    <div><h4>Pressure : {this.props.pressure}</h4> </div>
                </div>
                <div className="div-right-content">
                    <div><h4>Max temperature : {this.props.maxTemp}</h4>  </div>
                    <div><h4>Min Temperature : {this.props.minTemp}</h4> </div>
                </div>
                <div className="div-right-content">
                    <div><h4>Sunrise : {this.props.sunrise}</h4>  </div>
                    <div><h4>Sunset : {this.props.sunset}</h4> </div>
                </div>
            </div>
        );
    }
}
export default RightWeather;