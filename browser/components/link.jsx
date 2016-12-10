import React, {Component} from 'react';
let moment = require('moment');

import {LinkStyles} from './../styles/link.jsx';
//need rank and vote up button

class Link extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			hide: false,
			comments: false,
			user: false,
			voted: false
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

		return (
			<div style={{display: 'flex', flex: 1, overflow: 'hidden'}}>
				<div style={{float: 'left', width: 28}}>
					<h4 style={{fontFamily: 'Oxygen', fontSize: 14, marginTop: 2, textAlign: 'right'}}>{this.props.num}.</h4>					
				</div>
				<div style={{float: 'left', width: 10}}>
					<h3 style={{fontFamily: 'Oxygen', fontSize: 10, marginTop: 5, marginLeft: 2, textAlign: 'center'}}>▲</h3>
				</div>
				<div style={LinkStyles.container}>
						<h5 style={LinkStyles.linkText}>
							<a href={this.props.link.url} 
								style={LinkStyles.linkText}>
								{this.props.link.title}
							</a>
						</h5>
						<h6 style={LinkStyles.otherText}>
							{formattedScore(this.props.link.score)} by <a href={'/'} onMouseEnter={toggleUser} onMouseLeave={toggleUser} style={userStyle}>{this.props.link.author}</a> {formattedTime(this.props.link.date)} | <span style={hideStyle} onMouseEnter={toggleHide} onMouseLeave={toggleHide}>hide</span> | <a href={'/'} onMouseEnter={toggleComment} onMouseLeave={toggleComment} style={commentsStyle}>{displayComments(this.props.link.comments)}</a>
						</h6>
				</div>
			</div>
		);
	}
}

export { Link };