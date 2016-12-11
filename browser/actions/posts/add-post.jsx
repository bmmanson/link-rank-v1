export const addPost = (id, title, url, score, comments, author, rank, date, voted) => {
	return {
		type: 'ADD_POST',
		id,
		title,
		url,
		score,
		comments,
		author,
		rank,
		date,
		voted
	};
};