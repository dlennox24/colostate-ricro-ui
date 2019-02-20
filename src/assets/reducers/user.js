const user = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.user;
    case 'LOGOUT':
      return 'loggedout';
    case 'UPDATE_PROFILE_IMAGE':
      return { ...state, profileImage: action.profileImagePath };
    case 'UPDATE_DISPLAY_NAME':
      return { ...state, displayName: action.displayName };
    default:
      return state;
  }
};

export default user;
