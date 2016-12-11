import { rootUrl } from './index.jsx';
import { store } from './../store.jsx';
import { downvotePost } from './../actions/index.jsx';

const httpRequest = (downvote) => {
	const url = rootUrl + 'api/post/downvote';
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

export const downvotePostOnServer = (downvote) => {
	console.log("downvote in downvote post on server", downvote);
	return httpRequest(downvote)
	.then((data) => data.json())
	.then((data) => {
		store.dispatch(downvotePost(downvote.postId));
	})
};