export const addComment = (id, text, parentId, postId, score, date, author, authorId) => {
	return {
		type: 'ADD_COMMENT',
		id,
		text,
		parentId,
		postId,
		score,
		date,
		author,
		authorId
	};
};