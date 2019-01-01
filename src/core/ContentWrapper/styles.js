const styles = theme => ({
  '@global': {
    pre: {
      color: '#424242',
      padding: '8px 10px 16px',
      overflow: 'auto',
      borderLeft: `4px solid ${theme.palette.primary.main}`,
      backgroundColor: '#eeeeee',
    },
    '@keyframes CountdownProgress-fullWidthGrow': {
      from: { width: '0%' },
      to: { width: '100%' },
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
  skipNavLink: {
    height: 0,
    margin: 0,
    width: 0,
    padding: 0,
    border: 0,
    overflow: 'hidden',
  },
});

export default styles;
