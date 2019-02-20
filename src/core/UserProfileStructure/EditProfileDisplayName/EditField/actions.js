const reduxUpdateDisplayName = displayName => {
  return {
    type: 'UPDATE_DISPLAY_NAME',
    displayName,
  };
};

export default reduxUpdateDisplayName;
