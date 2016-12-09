export const posts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        {
          title: action.title,
          url: action.url,
          score: action.score,
          comments: action.comments,
          author: action.author,
          rank: action.rank
        }
      ]
    case 'DELETE_ALL_POSTS':
      return [];
    default:
      return state;
  }
}
