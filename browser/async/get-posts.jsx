import { store } from './../store.jsx';

import { 
	addPost, 
	deleteAllPosts,
	resetPage,
	selectMain, 
	selectNewest
} from './../actions/index.jsx';

import { rootUrl } from './index.jsx';

const httpRequest = (type) => {
	let route;
	if (type === 'MAIN') {
		route = 'main';
		store.dispatch(selectMain());
	} else if (type === 'NEWEST') {
		route = 'newest';
		store.dispatch(selectNewest());
	}

	const request = {
		headers: {
			'Content-Type': 'application/json'
  		},
		credentials: 'same-origin',
		method: 'GET'
	}

	const url = rootUrl + `api/post/${route}/`;
	return fetch(url, request);
}

export const getPosts = (type) => {
	store.dispatch(deleteAllPosts());
	store.dispatch(resetPage());
	return httpRequest(type)
	.then((data) => data.json())
	.then((posts) => {
		posts.forEach((post) => {
			store.dispatch(
				addPost(
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
	})
};