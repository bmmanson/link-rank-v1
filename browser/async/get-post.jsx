import { store } from './../store.jsx';

import { addPost } from './../actions/index.jsx';

import { rootUrl } from './index.jsx';

const httpRequest = (id) => {
	const url = rootUrl + 'api/post/' + id;
	return fetch(url, {method: 'GET'});
}

export const getPost = (id) => {
	return httpRequest(id)
	.then((data) => data.json())
	.then((post) => {
		store.dispatch(addPost(
				post.id,
				post.title,
				post.url,
				post.score,
				post.numberOfComments,
				post.user.name,
				post.rank,
				post.createdAt
			)
		)
	})
	return post;
};