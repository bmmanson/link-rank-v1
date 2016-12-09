import { store } from './../store.jsx';

import { addPost } from './../actions/index.jsx';

import { rootUrl } from './index.jsx';

const httpRequest = () => {
	const url = rootUrl + 'api/post/';
	return fetch(url, {method: 'GET'});
}

export const getPosts = () => {
	console.log("GET POSTS");
	return httpRequest()
	.then((data) => data.json())
	.then((posts) => {
		posts.forEach((post) => {
			console.log("POST", post);
			store.dispatch(
				addPost(
					post.title,
					post.url,
					post.score,
					post.numberOfComments,
					post.user.name,
					post.rank
				)
			)
		})
	})
};