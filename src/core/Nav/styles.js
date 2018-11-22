const styles = theme => ({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  appBar: {
    position: 'sticky',
    top: 0,
    borderBottom: `3px solid ${theme.palette.csu.primary.gold}`,
    [theme.breakpoints.up('md')]: {
      zIndex: theme.zIndex.drawer + 1,
    },
  },
  content: {
    padding: theme.spacing.unit * 3,
    [theme.breakpoints.up('md')]: {},
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      minWidth: 270,
      display: 'flex',
    },
  },
  drawerDocked: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flex: 1,
    },
  },
  flex: {
    flex: 1,
    display: 'flex',
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
});

export default styles;
