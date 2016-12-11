export const addPost = (id, title, url, score, comments, author, rank, date) => {
	return {
		type: 'ADD_POST',
		id,
		title,
		url,
		score,
		comments,
		author,
		rank,
		date
	};
};