import { store } from './../store.jsx';

import { 
	addComment,
	deleteAllComments 
} from './../actions/index.jsx';

import { rootUrl } from './index.jsx';

const httpRequest = (id) => {
	const url = rootUrl + 'api/post/comment/' + id;
	return fetch(url, {method: 'GET'});
}

export const getComments = (id) => {
	store.dispatch(deleteAllComments());
	return httpRequest(id)
	.then((data) => data.json())
	.then((comments) => {
		comments.forEach((comment) => {
			store.dispatch(
				addComment(
					comment.id,
					comment.text,
					comment.parentId,
					comment.postId,
					comment.score,
					comment.createdAt,
					comment.author.name,
					comment.author.id,
					false
				)
			)
		})
	})
};