import { rootUrl } from './index.jsx';

const httpRequest = () => {
	const url = rootUrl + '';
	return fetch(url, {method: 'GET'});
}

export const loginFb = () => {
	return httpRequest()
		.then((data) => data.json())
		.then((login) => {
			console.log(login);
		})
};
