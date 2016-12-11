const comment = (state, action) => {
  switch (action.type) {
    case 'UPVOTE_COMMENT':
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        score: state.score + 1,
        voted: true
      })
    case 'DOWNVOTE_COMMENT':
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        score: state.score - 1,
        voted: false
      })
  }
}

export const comments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          parentId: action.parentId,
          postId: action.postId,
          score: action.score,
          date: action.date,
          author: action.author,
          authorId: action.authorId
        }
      ]
    case 'DELETE_ALL_COMMENTS':
      return [];
    case 'UPVOTE_COMMENT':
      return state.map(c =>
        comment(c, action)
      )
    case 'DOWNVOTE_COMMENT':
      return state.map(c =>
        comment(c, action)
      )
    default:
      return state;
  }
}