import { rootUrl } from './index.jsx';

import { logout } from './../actions/index.jsx';
import { store } from './../store.jsx';

const httpRequest = () => {
	const request = {
		headers: {
			'Content-Type': 'application/json'
  		},
  		credentials: 'same-origin',
  		method: "GET",
  		body: JSON.stringify()
    };
	const url = rootUrl + 'auth/logout';
	return fetch(url, request);
}

export const logoutServer = () => {
	return httpRequest()
	.then((data) => {
		store.dispatch(logout());
	})
};