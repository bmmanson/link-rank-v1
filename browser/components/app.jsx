import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router';
import { RootView } from './root-view.jsx';
import { SubmitView } from './submit-view.jsx';

import { store } from './../store.jsx';

class App extends Component {
	render () {
		return (
		<Provider store={store}>
			<Router history={browserHistory}>
				<Route path="/" component={RootView} />
				<Route path="submit" component={SubmitView} />
			</Router>
		</Provider>
		);
	}
}

export {App};