export const addPost = (title, url, score, comments, author, rank) => {
	return {
		type: 'ADD_POST',
		title,
		url,
		score,
		comments,
		author,
		rank
	}
};