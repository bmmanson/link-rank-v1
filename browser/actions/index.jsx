import {addPost} from './posts/add-post.jsx';
import {upvotePost} from './posts/upvote-post.jsx';
import {downvotePost} from './posts/downvote-post.jsx';
import {deleteAllPosts} from './posts/delete-all-posts.jsx';

import {addComment} from './comments/add-comment.jsx';
import {deleteAllComments} from './comments/delete-all-comments.jsx';
import {upvoteComment} from './comments/upvote-comment.jsx';
import {downvoteComment} from './comments/downvote-comment.jsx';

import {nextPage} from './session/next-page.jsx';
import {selectNewest} from './session/select-newest.jsx';
import {selectMain} from './session/select-main.jsx';
import {resetPage} from './session/reset-page.jsx';

export {
	addPost,
	addComment,
	upvotePost,
	downvotePost,
	deleteAllPosts,
	deleteAllComments,
	upvoteComment,
	downvoteComment,
	nextPage,
	selectNewest,
	selectMain,
	resetPage
};