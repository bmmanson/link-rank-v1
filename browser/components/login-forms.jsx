import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Navbar } from './navbar.jsx';
import { FacebookLoginButton } from './facebook-login-button.jsx';

class LoginForms extends Component {

	render () {
		return (
			<div>
				<FacebookLoginButton />
			</div>
		);
	}
}

export { LoginForms };