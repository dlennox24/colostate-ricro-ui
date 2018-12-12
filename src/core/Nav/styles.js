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
  },
});

export default styles;
