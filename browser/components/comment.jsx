import React, {Component} from 'react';
let moment = require('moment');

import {Comments} from './comments.jsx';

class Comment extends Component {

//for each comment, add a comments component.
//if it is not an empty array, pass to it the children of the current comment

	render () {

		const renderChildren = (children) => {
			if (children.length > 0) {
				return (
					<Comments comments={children} />
				);
			}
		};

		const formattedTime = (date) => {
			if (date) {
				return moment(date).fromNow();
			}
		}

		return (
			<div style={{fontFamily: 'Oxygen'}}>
				<div>
					<p style={{fontSize: 11, marginBottom: 4}}>
						{this.props.comment.author} - {formattedTime(this.props.comment.date)} [-]
					</p>
					<p style={{fontSize: 14, marginTop: 4, marginBottom: 0}}>
						{this.props.comment.text}
					</p>
					<p style={{fontSize: 11, marginTop: 4, textDecoration: 'underline'}}>
						reply
					</p>
				</div>
				<div>
					{renderChildren(this.props.comment.children)}
				</div>
			</div>
		);
	}
}

export { Comment };