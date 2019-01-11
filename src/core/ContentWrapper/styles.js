// eslint-disable-next-line max-lines-per-function
const styles = theme => ({
  '@global': {
    'p a, span a': {
      color: theme.palette.primary.main,
      '&:hover': {
        color: theme.palette.secondary.main,
      },
    },
    code: {
      padding: '0.2em 0.4em',
      margin: 0,
      borderRadius: 3,
      fontFamily: 'monospace',
      backgroundColor: theme.palette.csu.primary.green.main,
      color: theme.palette.csu.primary.green.contrastText,
    },
    blockquote: {
      fontSize: ' 1.4em',
      fontStyle: 'italic',
      color: theme.palette.csu.secondary.black.main,
      padding: '1.2em 30px 1.2em 75px',
      borderLeft: `8px solid ${theme.palette.primary.light}`,
      position: 'relative',
      background: theme.palette.grey[200],
      '&>:last-child': {
        marginBottom: 0,
      },
      '&::before': {
        fontFamily: 'Arial',
        content: '"\\201C"',
        color: theme.palette.csu.primary.gold.main,
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
    borderBottom: `3px solid ${theme.palette.csu.primary.gold.main}`,
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
