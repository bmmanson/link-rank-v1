import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Navbar } from './navbar.jsx';
import { Posts } from './posts.jsx';

import { getPosts } from './../async/index.jsx';
import { store } from './../store.jsx';

class Root extends Component {

	componentWillMount() {
		getPosts();
	}

	render () {
		return (
			<div>
				<div style={{marginLeft: 70, marginRight: 70}}>
					<Navbar selected={'MAIN'} />
					<Posts posts={this.props.posts} />
				</div>
			</div>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		posts: state.posts,
	};
}

const RootView = connect(
	mapStateToProps
)(Root);

export { RootView };