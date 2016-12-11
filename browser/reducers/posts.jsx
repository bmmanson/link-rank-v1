const post = (state, action) => {
  switch (action.type) {
    case 'UPVOTE_POST':
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        score: state.score + 1,
        voted: true
      })
    case 'DOWNVOTE_POST':
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        score: state.score - 1,
        voted: false
      })
  }
}

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
          date: action.date,
          voted: action.voted
        }
      ]
    case 'DELETE_ALL_POSTS':
      return [];
    case 'UPVOTE_POST':
      return state.map(p =>
        post(p, action)
      )
    case 'DOWNVOTE_POST':
      return state.map(p =>
        post(p, action)
      )
    default:
      return state;
  }
}
