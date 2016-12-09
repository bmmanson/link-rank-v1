import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers/index.jsx';

let store = createStore(
	reducer,
	applyMiddleware(thunk)
);

export { store };