import React, {Component} from 'react';
import { connect } from 'react-redux';

import FacebookLogin from 'react-facebook-login';

import { Navbar } from './navbar.jsx';
import { sendAccessToken } from './../async/index.jsx';

//from fsa
//https://github.com/ReactTraining/react-router/tree/master/examples/auth-flow
//https://stormpath.com/blog/everything-you-ever-wanted-to-know-about-node-dot-js-sessions
//http://toon.io/understanding-passportjs-authentication-flow/

//https://preact.gitbooks.io/react-book/content/flux/auth.html
//https://scotch.io/tutorials/build-a-react-flux-app-with-user-authentication
//https://stormpath.com/blog/build-a-react-app-with-user-authentication
//https://auth0.com/blog/adding-authentication-to-your-react-flux-app/
//https://github.com/ReactTraining/react-router/blob/master/examples/auth-flow/app.js
//https://code.tutsplus.com/tutorials/data-persistence-and-sessions-with-react--cms-25180

//https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens
//https://www.npmjs.com/package/passport-jwt

class FacebookLoginButton extends Component {

	constructor(props) {
		super(props);
		this.state = {
			loggingIn: false,
		};
	}

	render () {

		const componentClicked = () => {
			console.log('clicked');
			this.setState({loggingIn: true});
		}

		const responseFacebook = (response) => {
 			if (this.state.loggingIn) {
 				console.log(response);
 				sendAccessToken(response.accessToken)
 				.then(() => console.log("hello?"));
 			}
		}

		return (
		<div>
		  <FacebookLogin
		    appId='1808999999371213'
		    cookie={true}
		    autoLoad={true}
		    fields='name, email'
		    size='metro'
		    icon="fa-facebook"
		    xfbml={true}
		    textButton="Log in with Facebook"
		    container={{borderRadius: 5}}
		    buttonStyle={{fontFamily: 'Tahoma', borderRadius: 3, textTransform: 'none', fontSize: 14, fontWeight: 'bold', height: 30, width: 200, padding: 0}}
		    onClick={componentClicked}
		    callback={responseFacebook} />
		</div>		
		);
	}
}

export { FacebookLoginButton };

