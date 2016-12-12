import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Navbar } from './navbar.jsx';
import { Posts } from './posts.jsx';
import { Footer } from './footer.jsx';
import { MoreButton } from './more-button.jsx';

import { getPosts } from './../async/index.jsx';
import { store } from './../store.jsx';

class Root extends Component {

	componentWillMount() {
		getPosts(this.props.page);
	}

	render () {

		const displayMoreButton = (valid) => {
			if (valid) return (<MoreButton page={this.props.page} />);
			else return (<p> </p>);
		}

		return (
			<div>
				<div style={{marginLeft: 70, marginRight: 70, backgroundColor:'#F7F7F7'}}>
					<Navbar selected={'MAIN'} />
					<Posts posts={this.props.posts} type={'MAIN'} />
					{displayMoreButton(this.props.moreLinks)}
					<Footer />
				</div>
			</div>
		);
	}
}

const linksPerPage = 20;

const filterPosts = (posts, page) => {
	const currentMaxPage = page * linksPerPage;
	if ( posts.length < currentMaxPage ) {
		return posts;
	} else {
		return posts.slice(0, currentMaxPage);
	}
}; 

const displayMoreLinks = (posts, page) => {
	return posts.length > (page * linksPerPage) && posts.length !== (page * linksPerPage);
};

const mapStateToProps = (state) => {
	return {
		posts: filterPosts(state.posts, state.session.page),
		moreLinks: displayMoreLinks(state.posts, state.session.page),
	};
}

const RootView = connect(
	mapStateToProps
)(Root);

export { RootView };