const user = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.user;
    case 'LOGOUT':
      return false;
    default:
      return state;
  }
};

export default user;
