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
    case 'SELECT_SUBMIT':
      return Object.assign({}, state, {
        selected: 'SUBMIT'
      });
    case 'LOGIN':
      return Object.assign({}, state, {
        loggedIn: true,
        name: action.name,
        score: action.score
      });
    case 'LOGOUT':
      return Object.assign({}, state, {
        loggedIn: false,
        name: null,
        score: 0
      });
    case 'INIT_OFF':
      return Object.assign({}, state, {
        init: false
      });
    default:
      return state;
  }
}