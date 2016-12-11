import React, {Component} from 'react';

import {Comment} from './comment.jsx';

class Comments extends Component {

	render () {

		const renderComments = (comments) => {
			return comments.map((comment, i) =>
				(<Comment comment={comment} key={i} />)
			);
		};

		return (
			<div style={{marginLeft: 30}}>
				{renderComments(this.props.comments)}
			</div>
		);
	}
}

export { Comments };