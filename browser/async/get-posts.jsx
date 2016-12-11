import { store } from './../store.jsx';

import { 
	addPost, 
	deleteAllPosts 
} from './../actions/index.jsx';

import { rootUrl } from './index.jsx';

const httpRequest = () => {
	const url = rootUrl + 'api/post/';
	return fetch(url, {method: 'GET'});
}

export const getPosts = () => {
	store.dispatch(deleteAllPosts());
	return httpRequest()
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