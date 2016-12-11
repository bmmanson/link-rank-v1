import { rootUrl } from './index.jsx';
import { store } from './../store.jsx';
import { upvotePost } from './../actions/index.jsx';

const httpRequest = (upvote) => {
	const url = rootUrl + 'api/post/upvote';
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

export const upvotePostOnServer = (upvote) => {
	return httpRequest(upvote)
	.then((data) => data.json())
	.then((upvote) => {
		store.dispatch(upvotePost(upvote.postId));
	})
};