import { getPosts } from './get-posts.jsx';
import { submitPost } from './submit-post.jsx';
import { getPost } from './get-post.jsx';
import { morePosts } from './more-posts.jsx';
import { getComments } from './get-comments.jsx';
import { upvotePostOnServer } from './upvote-post.jsx';
import { downvotePostOnServer } from './downvote-post.jsx';
import { upvoteCommentOnServer } from './upvote-comment.jsx';
import { downvoteCommentOnServer } from './downvote-comment.jsx'; 
import { loginServer } from './login.jsx';
import { logoutServer } from './logout.jsx';
import { getLoggedIn } from './get-logged-in.jsx';

export const rootUrl = 'http://localhost:1337/';

export {
	getPosts,
	submitPost,
	getPost,
	getComments,
	upvotePostOnServer,
	downvotePostOnServer,
	upvoteCommentOnServer,
	downvoteCommentOnServer,
	morePosts,
	loginServer,
	logoutServer,
	getLoggedIn
};