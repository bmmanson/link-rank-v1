import { rootUrl } from './index.jsx';
import { store } from './../store.jsx';
import { downvoteComment } from './../actions/index.jsx';

const httpRequest = (downvote) => {
	const url = rootUrl + 'api/post/comment/downvote';
	const data = JSON.stringify(downvote);
	const request = {
		headers: {
			'Content-Type': 'application/json'
  		},
  		method: "DELETE",
  		body: data
    };
	return fetch(url, request);
}

export const downvoteCommentOnServer = (downvote) => {
	return httpRequest(downvote)
	.then((data) => data.json())
	.then((data) => {
		store.dispatch(downvoteComment(downvote.commentId));
	})
};