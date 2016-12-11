import React, {Component} from 'react';
import { Link } from 'react-router';
let moment = require('moment');

import {PostStyles} from './../styles/post.jsx';

import {
	upvotePostOnServer,
	downvotePostOnServer
} from './../async/index.jsx';

class Post extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			hide: false,
			comments: false,
			user: false,
			voted: false,
			downvote: false
		};
	}

	render () {

		const toggleHide = () => {
			this.setState({hide: !this.state.hide});
		}

		const toggleComment = () => {
			this.setState({comments: !this.state.comments});
		}

		const toggleUser = () => {
			this.setState({user: !this.state.user});
		}

		const toggleDownvote = () => {
			this.setState({downvote: !this.state.downvote});
		}

		var hideStyle;
		if (this.state.hide) {
			hideStyle = {
				textDecoration: 'underline',
			};
		} else {
			hideStyle = {};
		}

		var commentsStyle = {
			color: '#828282'
		}
		if (this.state.comments) {
			commentsStyle.textDecoration = 'underline';
		} else {
			commentsStyle.textDecoration = 'none';	
		}

		var userStyle = {
			color: '#828282'
		}
		if (this.state.user) {
			userStyle.textDecoration = 'underline';
		} else {
			userStyle.textDecoration = 'none';
		}

		var downvoteStyle = {
			color: '#828282'
		}
		if (this.state.downvote) {
			downvoteStyle.textDecoration = 'underline';
		} else {
			downvoteStyle.textDecoration = 'none';
		}

		const formattedTime = (date) => {
			if (date) {
				return moment(date).fromNow();
			}
		}

		const displayComments = (numberOfComments) => {
			if (numberOfComments === 0) {
				return "discuss";
			} else {
				return "comments (" + numberOfComments + ")";
			}
		}

		const formattedScore = (score) => {
			if (score === 1) {
				return "1 point";
			} else {
				return "" + score + " points";
			}
		}

		const formattedRank = (type, rank) => {
			if (type === 'DISCUSS') {
				return (
					<h4 style={{fontFamily: 'Oxygen', fontSize: 14, marginTop: 2, textAlign: 'right'}}> </h4>
				);
			} else if (type === 'MAIN') {
				return (
					<h4 style={{fontFamily: 'Oxygen', fontSize: 14, marginTop: 2, textAlign: 'right'}}>{this.props.num}.</h4>
				);
			}
		}

		const upvote = () => {
			upvotePostOnServer({
				postId: this.props.post.id,
				userId: 1 //change when login setup
			});
		}

		const downvote = () => {
			downvotePostOnServer({
				postId: this.props.post.id,
				userId: 1 //change when login setup
			});
			toggleDownvote();
		}

		const displayVoteButton = (voted) => {
			if (voted) {
				return (<h3 style={{fontFamily: 'Oxygen', fontSize: 10, marginTop: 5, marginLeft: 2, textAlign: 'center'}}> </h3>);
			} else {
				return (<h3 onClick={upvote} style={{fontFamily: 'Oxygen', fontSize: 10, marginTop: 5, marginLeft: 2, textAlign: 'center'}}>▲</h3>);
			}
		}

		const displayDownvoteButton = (voted) => {
			if (voted) {
				return (<span><span style={downvoteStyle} onClick={downvote} onMouseEnter={toggleDownvote} onMouseLeave={toggleDownvote}>unvote</span> |</span>);
			} else {
				return (<span></span>);
			}
		}

		return (
			<div style={{display: 'flex', flex: 1, overflow: 'hidden'}}>
				<div style={{float: 'left', width: 28}}>
					{formattedRank(this.props.type, this.props.num)}					
				</div>
				<div style={{float: 'left', width: 10}}>
					{displayVoteButton(this.props.post.voted)}
				</div>
				<div style={PostStyles.container}>
						<h5 style={PostStyles.linkText}>
							<a href={this.props.post.url} 
								style={PostStyles.linkText}>
								{this.props.post.title}
							</a>
						</h5>
						<h6 style={PostStyles.otherText}>
							{formattedScore(this.props.post.score)} by <a href={'/'} onMouseEnter={toggleUser} onMouseLeave={toggleUser} style={userStyle}>{this.props.post.author}</a> {formattedTime(this.props.post.date)} | <span style={hideStyle} onMouseEnter={toggleHide} onMouseLeave={toggleHide}>hide</span> | {displayDownvoteButton(this.props.post.voted)} <Link to={`/item/${this.props.post.id}`} onMouseEnter={toggleComment} onMouseLeave={toggleComment} style={commentsStyle}>{displayComments(this.props.post.comments)}</Link>
						</h6>
				</div>
			</div>
		);
	}
}

export { Post };