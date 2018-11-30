const styles = theme => ({
  drawer: {
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      width: 300,
    },
  },
  drawerDocked: {
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flex: 1,
    },
  },
  flex: {
    flex: 1,
    display: 'flex',
  },
});

export default styles;
