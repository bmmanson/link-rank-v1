import React, {Component} from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { Navbar } from './navbar.jsx';
import { FacebookLoginButton } from './facebook-login-button.jsx';

import { loginServer } from './../async/index.jsx';

class LoginForms extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			passwordDisplay: '',
			newUsername: '',
			newPassword: ''
		};
	}

	render () {

		const userLogin = () => {
			console.log('username:', this.state.username, 'password:', this.state.password);
			loginServer(this.state.username, this.state.password)
			.then((data) => browserHistory.push('/'));
		}

		return (
			<div style={{backgroundColor:'#F7F7F7', fontFamily: 'Oxygen'}}>
				<div style={{height: 0, paddingTop: 1}}>
				</div>
				<h2 style={{marginLeft: 6, marginBottom: 2}}>Login</h2>
				<div>
					<p style={{margin: 0, marginLeft: 6, fontSize: 12}}>username:</p>
					<input style={{width: 200, marginTop: 0, marginBottom: 10, marginLeft: 6, fontSize: 14, height: 16}}
						value={this.state.username}
						onChange={(event) => this.setState({username: event.target.value})}/>
				</div>
				<div>
					<p style={{margin: 0, marginLeft: 6, fontSize: 12}}>password:</p>
					<input style={{width: 200, marginTop: 0, marginBottom: 10, marginLeft: 6, fontSize: 14, height: 16}}
						value={this.state.password}
						onChange={(event) => this.setState({password: event.target.value})}/>
				</div>
				<button style={{marginLeft: 6}} onClick={userLogin}>login</button>
				<h2 style={{marginLeft: 6, marginBottom: 2}}>Create Account</h2>
				<p style={{margin: 0, marginLeft: 6, fontSize: 12}}>username:</p>
				<div>
					<input style={{width: 200, marginTop: 0, marginBottom: 10, marginLeft: 6, fontSize: 14, height: 16}}
						value={this.state.newUsername}
						onChange={(event) => this.setState({newUsername: event.target.value})}/>
				</div>
				<p style={{margin: 0, marginLeft: 6, fontSize: 12}}>password:</p>
				<div>
					<input style={{width: 200, marginTop: 0, marginBottom: 10, marginLeft: 6, fontSize: 14, height: 16}}
						value={this.state.newPassword}
						onChange={(event) => this.setState({newPassword: event.target.value})}/>
				</div>
				<button style={{marginLeft: 6}}>create account</button>
				<div style={{height: 80, paddingLeft: 6}}>
				</div>
			</div>
		);
	}
}

export { LoginForms };