import React, {Component} from 'react';
import { Link } from 'react-router';
import { store } from './../store.jsx';

import { nextPage } from './../actions/index.jsx';

class MoreButton extends Component {

	constructor(props) {
		super(props);
		this.state = {
			button: false,
		};
	}

	render () {

		const toggleButton = () => {
			this.setState({button: !this.state.button});
		}

		const style = {
			display: 'flex', 
			flex: 1, 
			height: 30,
			marginTop: 30,
			marginBottom: 30,
			padding: 0
		}

		if (this.state.button) {
			style.backgroundColor = '#1E90FF';
		} else {
			style.backgroundColor = '#87CEFA';
		}

		let getMorePosts = () => {
			store.dispatch(nextPage());
		}

		return (
			<div style={style} onMouseEnter={toggleButton} onMouseLeave={toggleButton}>
				<h5 onClick={getMorePosts} style={{flex: 1, textAlign:'center', fontFamily: 'Oxygen', color: 'white', margin: 0, marginTop: 6, padding: 0}}>More Links</h5>
			</div>
		);
	}
}

export { MoreButton };