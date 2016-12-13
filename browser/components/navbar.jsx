import React, {Component} from 'react';
import { Link } from 'react-router';

import { store } from './../store.jsx';

import { selectSubmit } from './../actions/index.jsx';

import { getPosts } from './../async/index.jsx';

import {NavbarStyles} from './../styles/navbar.jsx';

class Navbar extends Component {
	render () {

		let mainStyle = {};
		let newestStyle = {};
		let submitStyle = {};

		if (this.props.selected === 'MAIN') {
			mainStyle = {
				fontWeight: '700',
				textDecoration: 'underline'
			};		
		} else if (this.props.selected === 'NEWEST') {
			newestStyle = {
				fontWeight: '700',
				textDecoration: 'underline'
			};
		} else if (this.props.selected === 'SUBMIT') {
			submitStyle = {
				fontWeight: '700',
				textDecoration: 'underline'
			};
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
							Link Rank | <span onClick={updatePostsMain} style={mainStyle}>Main</span> | <span onClick={updatePostsNewest} style={newestStyle}>Newest</span> | About | <span onClick={updateSubmit} style={submitStyle}>Submit</span>
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