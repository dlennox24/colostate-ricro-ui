const styles = theme => ({
  root: {
    width: '100%',
    [theme.breakpoints.down('md')]: {
      width: '100vw',
      maxWidth: 400,
    },
  },
  active: {
    borderRight: `4px solid ${theme.palette.secondary.main}`,
  },
  subNavList: {
    paddingTop: 0,
    paddingBottom: 0,
  },
});

export default styles;
