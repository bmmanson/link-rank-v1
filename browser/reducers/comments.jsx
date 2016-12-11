export const comments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          parentId: action.parentId,
          score: action.score,
          date: action.date,
          author: action.author,
          authorId: action.authorId
        }
      ]
    case 'DELETE_ALL_COMMENTS':
      return [];
    default:
      return state;
  }
}