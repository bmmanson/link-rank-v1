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
				post.data.id,
				post.data.title,
				post.data.url,
				post.data.score,
				post.data.numberOfComments,
				post.data.user.name,
				post.data.rank,
				post.data.createdAt,
				post.voted
			)
		)
	})
	return post;
};