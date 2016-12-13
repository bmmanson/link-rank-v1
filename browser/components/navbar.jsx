import React, {Component} from 'react';
import { Link } from 'react-router';

import { store } from './../store.jsx';

import { selectSubmit } from './../actions/index.jsx';

import { getPosts } from './../async/index.jsx';

import {NavbarStyles} from './../styles/navbar.jsx';

class Navbar extends Component {
	render () {

		let mainStyle = {color: 'white', textDecoration: 'none'};
		let newestStyle = {color: 'white', textDecoration: 'none'};
		let submitStyle = {color: 'white', textDecoration: 'none'};

		if (this.props.selected === 'MAIN') {
			mainStyle = Object.assign({}, mainStyle, {
				fontWeight: '700',
				textDecoration: 'underline'
			});		
		} else if (this.props.selected === 'NEWEST') {
			newestStyle = Object.assign({}, newestStyle, {
				fontWeight: '700',
				textDecoration: 'underline'
			});
		} else if (this.props.selected === 'SUBMIT') {
			submitStyle = Object.assign({}, submitStyle, {
				fontWeight: '700',
				textDecoration: 'underline',
			});
		}

		const updatePostsMain = () => {
			getPosts('MAIN');
		}

		const updatePostsNewest = () => {
			getPosts('NEWEST');
		}

		const updateSubmit = () => {
			store.dispatch(selectSubmit());
		}

		return (
			<div style={NavbarStyles.container}>
				<div style={NavbarStyles.half}>
					<h5 style={NavbarStyles.leftText}>
							Link Rank | <Link to={'/'} onClick={updatePostsMain} style={mainStyle}>Main</Link> | <Link to={'/'} onClick={updatePostsNewest} style={newestStyle}>Newest</Link> | About | <Link to={'submit'} style={submitStyle}>Submit</Link>
					</h5>
				</div>
				<div style={NavbarStyles.half}>
					<h5 style={NavbarStyles.rightText}>
							Login
					</h5>
				</div>
			</div>
		);
	}
}

export {Navbar};