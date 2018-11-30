const styles = theme => ({
  root: {
    width: '100%',
    [theme.breakpoints.down('md')]: {
      width: '100vw',
      maxWidth: 400,
    },
  },
});

export default styles;
