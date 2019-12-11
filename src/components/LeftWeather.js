import React from "react";
class LeftWeather extends React.Component{
    render(){
        return(
            <div className="App">
                <p>
                {this.props.city}{this.props.country}{this.props.date}
                </p>
                <div>
                    {this.props.temperature}{this.props.icon}
                </div>
            </div>
        );
    }
}
export default LeftWeather;