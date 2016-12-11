import { rootUrl } from './index.jsx';
import { store } from './../store.jsx';
import { addComment } from './../actions/index.jsx';

const httpRequest = (comment) => {
	const url = rootUrl + 'api/post/comment/new';
	const data = JSON.stringify(comment);
	const request = {
		headers: {
			'Content-Type': 'application/json'
  		},
  		method: "POST",
  		body: data
    };
	return fetch(url, request);
}

export const submitComment = (comment) => {
	return httpRequest(comment)
	.then((data) => data.json())
	.then((comment) => {
		if (comment) {
			store.dispatch(
				addComment(
					comment.id,
					comment.text,
					comment.parentId,
					comment.postId,
					comment.score,
					comment.createdAt,
					comment.author.name,
					comment.author.id
				)
			);
		} else {
			return false;
		}
	})
};