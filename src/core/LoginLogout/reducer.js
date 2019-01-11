const user = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.user;
    case 'LOGOUT':
      return 'loggedout';
    default:
      return state;
  }
};

export default user;
