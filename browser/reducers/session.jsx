export const session = (state = [], action) => {
  switch (action.type) {
    case 'NEXT_PAGE':
      return Object.assign({}, state, {
        page: state.page + 1
      });
    default:
      return state;
  }
}