export const addComment = (id, text, parentId, score, date, author, authorId) => {
	return {
		type: 'ADD_COMMENT',
		id,
		text,
		parentId,
		score,
		date,
		author,
		authorId
	};
};