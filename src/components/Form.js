import React from "react";
class Form extends React.Component{
    render(){
        return(
           <div className="App">
               <form onSubmit={this.props.getWeather}>
               <input type="text" name="city" placeholder="Enter city name here..."/>
               <button >Search</button>
               </form>
           </div> 
        );
    }
}
export default Form;