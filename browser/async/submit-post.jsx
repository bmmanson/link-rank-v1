import { rootUrl } from './index.jsx';

const httpRequest = (post) => {
	const url = rootUrl + 'api/post/new';
	const data = JSON.stringify(post);
	const request = {
		headers: {
			'Content-Type': 'application/json'
  		},
  		method: "POST",
  		body: data
    };
	return fetch(url, request);
}

export const submitPost = (post) => {
	return httpRequest(post)
	.then((data) => data.json())
	.then((post) => {
		if (post) {
			return true;
		} else {
			return false;
		}
	})
};