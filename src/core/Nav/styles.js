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
  stickyNav: {
    display: 'table',
    position: 'sticky',
    top: 67, // height of sticky header + its bottom border
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
