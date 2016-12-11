import React, {Component} from 'react';
import {submitComment} from './../async/submit-comment.jsx';

class AddComment extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text: '',
			sent: false
		};
	}

	render () {

		const submit = () => {
			if (this.state.text.length > 2) {

				let parentId;
				if (this.props.comment.id) {
					parentId = this.props.comment.id;
				} else {
					parentId = null;
				}

				const newComment = {
					authorId: this.props.comment.authorId,
					parentId: parentId,
					postId: this.props.comment.postId,
					text: this.state.text
				};
				submitComment(newComment);
				this.setState({
					text: '',
					sent: true
				});
			}
		}

		const displayCommentAdded = (sent) => {
			if (sent) {
				return (
				<p style={{margin: 0, marginTop: 2, marginBottom: 2, fontSize: 11, fontFamily: 'Verdana'}}>
					Comment added.
				</p>
				);
			}
		}

		return (
			<div>
				<textarea style={{display: 'block', height: 100, width: 400}}
					value={this.state.text}
					onChange={(event) => this.setState({text: event.target.value})} />
				<button onClick={submit}>add comment</button>
				{displayCommentAdded(this.state.sent)}
			</div>
		);
	}
}

export { AddComment };