import { rootUrl } from './index.jsx';

const httpRequest = (name, password) => {
	const request = {
		headers: {
			'Content-Type': 'application/json'
  		},
  		method: "POST",
  		body: JSON.stringify({name, password})
    };
	const url = rootUrl + 'auth/login';
	return fetch(url, request);
}

export const loginServer = (name, password) => {
	console.log('login server called');
	return httpRequest(name, password)
	.then((data) => {
		console.log('data', data);
		return data.json();
	})
	.then((login) => {
		console.log('in async function, loginServer', login);
	})
};
