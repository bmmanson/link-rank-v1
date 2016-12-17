import { rootUrl } from './index.jsx';

import { login } from './../actions/index.jsx';
import { store } from './../store.jsx';

const httpRequest = (name, password) => {
	const request = {
		headers: {
			'Content-Type': 'application/json'
  		},
  		credentials: 'same-origin',
  		method: "POST",
  		body: JSON.stringify({name, password})
    };
	const url = rootUrl + 'auth/login';
	return fetch(url, request);
}

export const loginServer = (name, password) => {
	return httpRequest(name, password)
	.then((data) => data.json())
	.then((data) => {
		store.dispatch(login(data.user.name, data.user.score));
		console.log('in async function, loginServer', data);
	})
};
