import React, {Component} from 'react';
let moment = require('moment');

import {Comments} from './comments.jsx';
import {AddComment} from './add-comment.jsx';

//for each comment, add a comments component.
//if it is not an empty array, pass to it the children of the current comment

//reply to comment
//when replying, "reply" is replaced with addComment

//be able to hide comments

class Comment extends Component {

	constructor(props) {
		super(props);
		this.state = {
			replying: false,
			hidden: false
		};
	}

	render () {

		const toggleReply = () => {
			return this.setState({replying: !this.state.replying});
		}

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

		const displayReply = (comment, replying) => {
			if (!replying) {
				return (
					<p style={{fontSize: 11, marginTop: 2, textDecoration: 'underline'}} onClick={toggleReply}>
						reply
					</p>
				);
			} else {
				return (
					<div>
					<p style={{fontSize: 11, marginTop: 2, textDecoration: 'underline'}} onClick={toggleReply}>
						close
					</p>
					<AddComment comment={comment} />
					</div>
				);
			}
		}

		return (
			<div style={{fontFamily: 'Verdana'}}>
				<div style={{float: 'left', marginRight: 2}}>
					<p style={{margin: 0, fontSize: 10, color: '#828282'}}>▲</p>
				</div>
				<div>
					<p style={{fontSize: 11, marginBottom: 1, color: '#828282'}}>
						{this.props.comment.author} - {formattedTime(this.props.comment.date)} [-]
					</p>
					<p style={{fontSize: 12, marginTop: 1, marginBottom: 0}}>
						{this.props.comment.text}
					</p>
					{displayReply(this.props.comment, this.state.replying)}
				</div>
				<div>
					{renderChildren(this.props.comment.children)}
				</div>
			</div>
		);
	}
}

export { Comment };