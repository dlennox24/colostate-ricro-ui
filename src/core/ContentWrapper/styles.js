const selection = theme => ({
  background: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  textShadow: 'none',
});

// eslint-disable-next-line max-lines-per-function
const styles = theme => ({
  '@global': {
    '::-moz-selection': selection(theme),
    '::selection': selection(theme),
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
      margin: theme.spacing(1),
      fontSize: ' 1.4em',
      fontStyle: 'italic',
      color: theme.palette.csu.secondary.black.main,
      padding: '.8em 24px .8em 43px',
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
        fontSize: '2.5em',
        position: 'absolute',
        left: theme.spacing(1),
        top: 0,
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
    padding: theme.spacing(3),
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
