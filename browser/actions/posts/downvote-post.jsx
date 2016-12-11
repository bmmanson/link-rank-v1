export const downvotePost = (id) => {
	return {
		type: 'DOWNVOTE_POST',
		id
	};
};