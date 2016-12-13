import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router';

import { RootView } from './root-view.jsx';
import { SubmitView } from './submit-view.jsx';
import { DiscussView } from './discuss-view.jsx';
import { LoginView } from './login-view.jsx';

import { store } from './../store.jsx';

class App extends Component {
	render () {
		return (
		<Provider store={store}>
			<Router history={browserHistory}>
				<Route path="/" component={RootView} />
				<Route path="submit" component={SubmitView} />
				<Route path="login" component={LoginView} />
				<Route path="/item/:itemId" component={DiscussView} />
			</Router>
		</Provider>
		);
	}
}

export {App};