const login = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.user,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: false,
      };
    default:
      return state;
  }
}

export default login;
