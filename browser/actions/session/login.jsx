export const login = (name, score) => {
	return {
		type: 'LOGIN',
		name,
		score
	};
};