import React, {Component} from 'react';
let moment = require('moment');

import {Comments} from './comments.jsx';
import {AddComment} from './add-comment.jsx';

import {
	upvoteCommentOnServer,
	downvoteCommentOnServer
} from './../async/index.jsx';

//a tree structure
//for each comment, add a comments component.
//if it is not an empty array, pass to it the children of the current comment

//be able to hide comments
//when hiding a comment, all child comments are also hidden

class Comment extends Component {

	constructor(props) {
		super(props);
		this.state = {
			replying: false,
			hidden: false,
			downvote: false
		};
	}

	render () {

		const toggleReply = () => {
			return this.setState({replying: !this.state.replying});
		}

		const toggleDownvote = () => {
			this.setState({downvote: !this.state.downvote});
		}

		var downvoteStyle = {
			color: '#828282'
		}
		if (this.state.downvote) {
			downvoteStyle.textDecoration = 'underline';
		} else {
			downvoteStyle.textDecoration = 'none';
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

		const hidden = (hidden) => {
			if (!hidden) {
				return (
				<div>
					<div>
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

		const toggleHide = () => {
			return this.setState({hidden: !this.state.hidden});
		}

		const hideButton = (hidden) => {
			if (hidden) {
				return (<span onClick={toggleHide}>[+]</span>);
			} else {
				return (<span onClick={toggleHide}>[-]</span>);
			}
		}

		const upvote = () => {
			console.log("upvote");
			upvoteCommentOnServer({
				commentId: this.props.comment.id,
				userId: 1 //change when login setup
			});
		}

		const downvote = () => {
			downvoteCommentOnServer({
				commentId: this.props.comment.id,
				userId: 1 //change when login setup
			});
		}

		const downvoteButton = (voted) => {
			if (voted) {
				return (<span onClick={downvote}>| <span style={downvoteStyle} onMouseEnter={toggleDownvote} onMouseLeave={toggleDownvote}>unvote</span></span>)
			}
		}

		const upvoteButton = (voted) => {
			if (voted) {
				return (<p style={{margin: 0, fontSize: 10, color: '#828282'}}> </p>);
			} else {
				return (<p onClick={upvote} style={{margin: 0, fontSize: 10, color: '#828282'}}>▲</p>);
			}
		}

		return (
			<div style={{fontFamily: 'Verdana'}}>
				<div style={{float: 'left', marginRight: 2}}>
					{upvoteButton(this.props.comment.voted)}
				</div>
				<div>
					<p style={{fontSize: 11, marginBottom: 1, color: '#828282'}}>
						{this.props.comment.author} - {formattedTime(this.props.comment.date)} {downvoteButton(this.props.comment.voted)} {hideButton(this.state.hidden)}
					</p>
				</div>
				{hidden(this.state.hidden)}
			</div>
		);
	}
}

export { Comment };