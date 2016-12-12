import { rootUrl } from './index.jsx';
import { store } from './../store.jsx';
import { upvoteComment } from './../actions/index.jsx';

const httpRequest = (upvote) => {
	const url = rootUrl + 'api/post/comment/upvote';
	const data = JSON.stringify(upvote);
	const request = {
		headers: {
			'Content-Type': 'application/json'
  		},
  		method: "POST",
  		body: data
    };
	return fetch(url, request);
}

export const upvoteCommentOnServer = (upvote) => {
	return httpRequest(upvote)
	.then((data) => data.json())
	.then((upvote) => {
		store.dispatch(upvoteComment(upvote.commentId));
	})
};