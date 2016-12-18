import React, {Component} from 'react';
import { Link } from 'react-router';

import { store } from './../store.jsx';

import { selectSubmit } from './../actions/index.jsx';

import { getPosts, logoutServer, getLoggedIn } from './../async/index.jsx';

import {NavbarStyles} from './../styles/navbar.jsx';

class Navbar extends Component {

	componentWillMount () {
		if (this.props.session.init) {
			getLoggedIn();
		}
	}

	render () {

		let mainStyle = {color: 'white', textDecoration: 'none'};
		let newestStyle = {color: 'white', textDecoration: 'none'};
		let submitStyle = {color: 'white', textDecoration: 'none'};
		if (this.props.session.selected === 'MAIN') {
			mainStyle = Object.assign({}, mainStyle, {
				fontWeight: '700',
				textDecoration: 'underline'
			});		
		} else if (this.props.session.selected === 'NEWEST') {
			newestStyle = Object.assign({}, newestStyle, {
				fontWeight: '700',
				textDecoration: 'underline'
			});
		} else if (this.props.session.selected === 'SUBMIT') {
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

		const logout = () => {
			logoutServer();
		}

		const displayLogin = (loggedIn) => {
			if (loggedIn) {
				return (
					<h5 style={NavbarStyles.rightText}>
							{this.props.session.name} (0) | <Link to={'/'} onClick={logout}>Logout</Link>
					</h5>
				);
			} else {
				return (
					<h5 style={NavbarStyles.rightText}>
							<Link to={'login'}>Login</Link>
					</h5>
				);
			}
		}

		return (
			<div style={NavbarStyles.container}>
				<div style={NavbarStyles.half}>
					<h5 style={NavbarStyles.leftText}>
							Link Rank | <Link to={'/'} onClick={updatePostsMain} style={mainStyle}>Main</Link> | <Link to={'/'} onClick={updatePostsNewest} style={newestStyle}>Newest</Link> | About | <Link to={'submit'} onClick={updateSubmit} style={submitStyle}>Submit</Link>
					</h5>
				</div>
				<div style={NavbarStyles.half}>
					{displayLogin(this.props.session.loggedIn)}
				</div>
			</div>
		);
	}
}

export {Navbar};