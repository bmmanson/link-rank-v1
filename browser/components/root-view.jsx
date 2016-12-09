import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Navbar } from './navbar.jsx';
import { Links } from './links.jsx';

import { getPosts } from './../async/index.jsx';
import { store } from './../store.jsx';

class Root extends Component {

	componentWillMount() {
		getPosts()
		.then((data) => {
			console.log(store.getState());
		});
	}

	render () {
		return (
			<div>
				<div style={{marginLeft: 70, marginRight: 70}}>
					<Navbar />
					<Links links={this.props.links} />
				</div>
			</div>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		links: state.posts,
	};
}

const RootView = connect(
	mapStateToProps
)(Root);

export { RootView };