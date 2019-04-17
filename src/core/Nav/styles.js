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
      width: '100%',
    },
  },
  swipeableDrawerToolbar: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  skipNavLink: {
    height: 0,
    padding: 0,
    overflow: 'hidden',
    '&:focus-within': {
      height: 'initial',
      padding: 'initial',
    },
  },
});

export default styles;
