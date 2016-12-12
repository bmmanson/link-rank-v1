export const downvoteComment = (id) => {
	return {
		type: 'DOWNVOTE_COMMENT',
		id
	};
};