import React, {Component} from 'react';
import { Link } from 'react-router';

import {NavbarStyles} from './../styles/navbar.jsx';

class Navbar extends Component {
	render () {
		return (
			<div style={NavbarStyles.container}>
				<div style={NavbarStyles.half}>
					<h5 style={NavbarStyles.leftText}>
							Link Rank | <Link to={'/'}>Main</Link> | Newest | About | <Link to={'submit'}>Submit</Link>
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