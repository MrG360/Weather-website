import React from 'react';
class Comments extends React.Component {
	constructor() {
		super();
		this.state = {
			buttonValue: 'Like',
			comment: '',
			listofComments: [],
			noofcom: 0,
		};
	}
	addComment = () => {
		this.setState({
			listofComments: [...this.state.listofComments, this.state.comment],
			comment: '',
			noofcom: this.state.noofcom + 1,
		});
	};
	handleChangeofComment = event => {
		this.setState({
			comment: event.target.value,
		});
		console.log(this.state.comment);
	};
	render() {
		return (
			<div className="div-comments">
				<textarea
					name="addcomments"
					onChange={event => this.handleChangeofComment(event)}
					value={this.state.comment}
					placeholder="Enter your comment here..."
				/>
				<br />
				<button onClick={this.addComment} className="button-comment">
					Comment
				</button>
				<div className="div-addComment">
					<h3 style={{ color: '#515661', marginBottom: '20px' }}>Comment({this.state.noofcom})</h3>
					{this.state.listofComments.map(elem => (
						<div className="div-addComment1">
							<h4 style={{ marginBottom: '5px' }}>
								<i className="fas fa-user"></i> {elem}
							</h4>
							<hr />
						</div>
					))}
				</div>
			</div>
		);
	}
}
export default Comments;
