export const downvoteComment = (id) => {
	return {
		type: 'DOWNVOTE_POST',
		id
	};
};