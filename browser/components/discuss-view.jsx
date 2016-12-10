import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Navbar } from './navbar.jsx';
import { Post } from './post.jsx';

import { getPost } from './../async/index.jsx';

class Discuss extends Component {

	componentWillMount () {
	
	}

	render () {

		return (
			<div>
				<div style={{marginLeft: 70, marginRight: 70}}>
					<Navbar selected={'NONE'} />
					<Post post={this.props.post} type={'DISCUSS'} />

				</div>
			</div>
		);
	}
}

const filterPost = (posts, id) => {
	if (posts.length === 0) {
		return getPost(id)
		.then((post) => post)
	} else {
		return posts.find(post => post.id == id);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		post: filterPost(state.posts, ownProps.params.itemId),
		//comments:
	};
}

const DiscussView = connect(
	mapStateToProps
)(Discuss);

export { DiscussView };