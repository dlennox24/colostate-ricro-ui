const styles = theme => ({
  copyLinks: {
    width: '100%',
  },
  copyright: {
    color: theme.palette.common.white,
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing.unit,
      textAlign: 'center',
    },
  },
  csuLogo: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    '& > a': {
      maxHeight: 50,
    },
  },
  footer: {
    padding: theme.spacing.unit * 1.5,
    '& img': {
      maxHeight: 50,
      width: 'fit-content',
    },
  },
  footerLink: {
    borderRight: `${theme.palette.common.white} solid 1px`,
    display: 'initial',
    padding: '0px 10px',
    '&:first-child': {
      paddingLeft: 0,
    },
    '&:last-child': {
      border: 'none',
      paddingRight: 0,
    },
    '& a': {
      textDecoration: 'none',
      color: theme.palette.common.white,
      '&:hover': {
        color: theme.palette.common.white,
        borderBottom: `2px solid ${theme.palette.csu.primary.gold.main}`,
      },
    },
  },
  footerLinksContainer: {
    lineHeight: `${theme.spacing.unit * 4}px`,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  footerText: {
    display: 'table',
    margin: '0 auto',
  },
});

export default styles;
