const styles = theme => ({
  '@global': {
    pre: {
      color: '#424242',
      padding: '8px 10px 16px',
      overflow: 'auto',
      borderLeft: `4px solid ${theme.palette.primary.light}`,
      backgroundColor: '#eeeeee',
    },
    code: {
      padding: '0.2em 0.4em',
      margin: 0,
      borderRadius: 3,
      backgroundColor: theme.palette.grey[200],
      color: theme.palette.grey[800],
    },
    blockquote: {
      fontSize: ' 1.4em',
      fontStyle: 'italic',
      color: ' #555555',
      padding: '1.2em 30px 1.2em 75px',
      borderLeft: `8px solid ${theme.palette.primary.light}`,
      position: 'relative',
      background: '#EDEDED',
      '&::before': {
        fontFamily: 'Arial',
        content: '"\\201C"',
        color: theme.palette.csu.primary.gold,
        fontSize: '4em',
        position: 'absolute',
        left: ' 10px',
        top: '10px',
      },

      '&::after': {
        content: '""',
      },

      '& footer': {
        display: 'block',
        color: '#333333',
        fontStyle: 'normal',
        fontWeight: 'bold',
        marginTop: '1em',
      },
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
  gutters: {
    padding: theme.spacing.unit * 3,
  },
  content: {
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
