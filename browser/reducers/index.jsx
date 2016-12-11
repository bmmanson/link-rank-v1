import { combineReducers } from 'redux';

import {posts} from './posts.jsx';
import {comments} from './comments.jsx';

export default combineReducers({
	posts,
	comments
});
