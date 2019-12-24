import React from 'react';
class Form extends React.Component {
	render() {
		return (
			<div className="div-search-bar">
				<form onSubmit={this.props.getWeather}>
					<input type="text" name="city" placeholder="Enter City Name..." />
					<button className="search-btn">Search</button>
				</form>
			</div>
		);
	}
}
export default Form;
