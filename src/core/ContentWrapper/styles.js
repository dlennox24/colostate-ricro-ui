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
    [theme.breakpoints.up('lg')]: {
      zIndex: theme.zIndex.drawer + 1,
    },
  },
  content: {
    padding: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  flex: {
    flex: 1,
    display: 'flex',
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
});

export default styles;
