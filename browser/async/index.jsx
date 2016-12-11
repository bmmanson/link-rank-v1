import { getPosts } from './get-posts.jsx';
import { submitPost } from './submit-post.jsx';
import { getPost } from './get-post.jsx';
import { getComments } from './get-comments.jsx';
import { upvotePostOnServer } from './upvote-post.jsx';
import { downvotePostOnServer } from './downvote-post.jsx';

export const rootUrl = 'http://localhost:1337/';

export {
	getPosts,
	submitPost,
	getPost,
	getComments,
	upvotePostOnServer,
	downvotePostOnServer
};