import { rootUrl } from './index.jsx';

const httpRequest = (token, username) => {
	const data = JSON.stringify({username});
	const request = {
		headers: {
			'Content-Type': 'application/json'
  		},
  		method: "POST",
  		body: data
    };
	const url = rootUrl + 'auth/facebook/token?access_token=' + token;
	return fetch(url, {method: 'POST'});
}

export const sendAccessToken = (token, username) => {
	return httpRequest(token, username)
		.then((data) => {
			return data.json();
		})
		.then((login) => {
			console.log('in async function, loginFb', login);
		})
};
