export const posts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          url: action.url,
          score: action.score,
          comments: action.comments,
          author: action.author,
          rank: action.rank,
          date: action.date
        }
      ]
    case 'DELETE_ALL_POSTS':
      return [];
    default:
      return state;
  }
}
