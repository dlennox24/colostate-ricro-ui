const reduxUpdateProfileImage = profileImagePath => {
  return {
    type: 'UPDATE_PROFILE_IMAGE',
    profileImagePath,
  };
};

export default reduxUpdateProfileImage;
