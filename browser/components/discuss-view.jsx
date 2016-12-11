import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Navbar } from './navbar.jsx';
import { Post } from './post.jsx';
import { AddComment } from './add-comment.jsx';
import { Comments } from './comments.jsx';
import { 
	getPost, 
	getComments 
} from './../async/index.jsx';

class Discuss extends Component {

//description

	componentWillMount () {
		getComments(this.props.params.itemId);
	}

	render () {
		return (
			<div>
				<div style={{marginLeft: 70, marginRight: 70, backgroundColor:'#F7F7F7'}}>
					<Navbar selected={'NONE'} />
					<Post post={this.props.post} type={'DISCUSS'} />
					<AddComment />
					<Comments comments={this.props.comments} />
				</div>
			</div>
		);
	}
}

const filterPost = (posts, id) => {
	if (posts.length === 0) {
		return getPost(id)
		.then((post) => post);
	} else {
		return posts.find(post => post.id == id);
	}
}

const organizeCommentsAsTree = (comments) => {
	const table = {};
	const arr = [];
	for (let i = 0; i < comments.length; i++) {
		comments[i].children = [];
		if (!comments[i].parentId) {
			arr.push(comments[i]);
		} else {
			let parentKey = comments[i].parentId.toString();
			if (table[parentKey]) {
				table[parentKey].children.push(comments[i]);
			}
		}
		let curKey = comments[i].id.toString();
		table[curKey] = comments[i];
	}
	console.log(arr);
	return arr;
}

const mapStateToProps = (state, ownProps) => {
	return {
		post: filterPost(state.posts, ownProps.params.itemId),
		comments: organizeCommentsAsTree(state.comments)
	};
}

const DiscussView = connect(
	mapStateToProps
)(Discuss);

export { DiscussView };