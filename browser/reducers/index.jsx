import { combineReducers } from 'redux';

import {posts} from './posts.jsx';
import {comments} from './comments.jsx';
import {session} from './session.jsx';

export default combineReducers({
	posts,
	comments,
	session
});
