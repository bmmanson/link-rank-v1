import React, {Component} from 'react';

import {NavbarStyles} from './../styles/navbar.jsx';

class Navbar extends Component {
	render () {
		return (
			<div style={NavbarStyles.container}>
				<div style={NavbarStyles.half}>
					<h5 style={NavbarStyles.leftText}>
							Link Rank || Main || Post || About
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