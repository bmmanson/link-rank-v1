import React, {Component} from 'react';
let moment = require('moment');

import {LinkStyles} from './../styles/link.jsx';
//need rank and vote up button

class Link extends Component {
	render () {

		const formattedTime = (date) => {
			if (date) {
				return moment(date).fromNow();
			}
		}

		const displayComments = (numberOfComments) => {
			if (numberOfComments === 0) {
				return "discuss";
			} else {
				return "comments (" + numberOfComments + ")"
			}
		}

		const formattedScore = (score) => {
			if (score === 1) {
				return "1 point";
			} else {
				return "" + score + " points"
			}
		}

		return (
			<div style={{display: 'flex', flex: 1, overflow: 'hidden'}}>
				<div style={{float: 'left', width: 26}}>
					<h4 style={{fontFamily: 'Oxygen', fontSize: 14, marginTop: 2, textAlign: 'right'}}>{this.props.num}.</h4>					
				</div>
				<div style={{float: 'left', width: 10}}>
					<h3 style={{fontFamily: 'Oxygen', fontSize: 10, marginTop: 5, marginLeft: 2, textAlign: 'center'}}>▲</h3>
				</div>
				<div style={LinkStyles.container}>
						<h5 style={LinkStyles.linkText}>
							<a href={this.props.link.url} style={LinkStyles.linkText}>{this.props.link.title}</a>
						</h5>
						<h6 style={LinkStyles.otherText}>
							{formattedScore(this.props.link.score)} by {this.props.link.author} {formattedTime(this.props.link.date)} | hide | {displayComments(this.props.link.comments)}
						</h6>
				</div>
			</div>
		);
	}
}

export { Link };