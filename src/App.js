import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import LeftWeather from './components/LeftWeather';
import RightWeather from './components/RightWeather';
import Comments from './components/Comments';
import './App.css';

const API_KEY = 'd72ea79d6b0aebe78cf24341141aa15a';
class App extends React.Component {
  getWeather=async(e)=>{
    const city=e.target.elements.city.value;
    e.preventDefault();
      const respond=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data=await respond.json();
      console.log(data);
  }
	render() {
		return (
			<div>
				<Titles></Titles>
				<Form getWeather={this.getWeather}></Form>
				<LeftWeather></LeftWeather>
				<RightWeather></RightWeather>
				<Comments></Comments>
			</div>
		);
	}
}

export default App;
