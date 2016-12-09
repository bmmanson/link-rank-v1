import React, {Component} from 'react';

//need rank and vote up button

class Link extends Component {
	render () {
		return (
			<div>
				<h3 href={this.props.link.url}>{this.props.link.title}</h3>
				<h6>{this.props.link.score} points by {this.props.link.author} || Comments ({this.props.link.comments}</h6>
			</div>
		);
	}
}

export { Link };