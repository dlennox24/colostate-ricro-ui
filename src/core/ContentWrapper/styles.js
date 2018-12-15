const styles = theme => ({
  '@global': {
    pre: {
      color: '#424242',
      padding: '8px 10px 16px',
      overflow: 'auto',
      borderLeft: `4px solid ${theme.palette.primary.main}`,
      backgroundColor: '#eeeeee',
    },
  },
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
    flex: 1,
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
