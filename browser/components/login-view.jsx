import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Navbar } from './navbar.jsx';
import { LoginForms } from './login-forms.jsx';

class Login extends Component {

	render () {
		return (
			<div>
				<div style={{marginLeft: 70, marginRight: 70}}>
					<Navbar session={this.props.session} />
					<LoginForms />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		session: state.session
	};
}

const LoginView = connect(
	mapStateToProps
)(Login);

export { LoginView };