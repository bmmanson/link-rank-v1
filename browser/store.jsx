import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { model } from './model.jsx';
import reducer from './reducers/index.jsx';

let store = createStore(
	reducer,
	model,
	applyMiddleware(thunk)
);

export { store };