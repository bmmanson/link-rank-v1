import { rootUrl } from './index.jsx';

import { login, initOff } from './../actions/index.jsx';
import { store } from './../store.jsx';

const httpRequest = () => {
	const request = {
		headers: {
			'Content-Type': 'application/json'
  		},
  		credentials: 'same-origin',
  		method: "GET",
    };
	const url = rootUrl + 'auth/session';
	return fetch(url, request);
}

export const getLoggedIn = () => {
	return httpRequest()
	.then((data) => {
		if (data.body) {
			return data.json();
		} else {
			return store.dispatch(initOff());
		}
	})
	.then((data) => {
		store.dispatch(login(data.user.name, data.user.score));
		store.dispatch(initOff());
	});
};