const styles = theme => ({
  root: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
    },
  },
});

export default styles;
