export const session = (state = [], action) => {
  switch (action.type) {
    case 'NEXT_PAGE':
      return Object.assign({}, state, {
        page: state.page + 1
      });
    case 'RESET_PAGE':
      return Object.assign({}, state, {
        page: 1
      })
    case 'SELECT_MAIN':
      return Object.assign({}, state, {
      	selected: 'MAIN'
      });
    case 'SELECT_NEWEST':
      return Object.assign({}, state, {
      	selected: 'NEWEST'
      });
    default:
      return state;
  }
}