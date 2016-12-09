import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { RootView } from './root-view.jsx';

import { store } from './../store.jsx';

class App extends Component {
	render () {
		return (
			<Provider store={store}>
				<RootView />
			</Provider>
		);
	}
}

export {App};