const bottomBorderWidth = 3;
const styles = theme => ({
  root: {
    '&>:nth-child(2)': {
      margin: 0,
    },
  },
  list: {
    marginTop: theme.spacing.unit * 1.75,
  },
  listItem: {
    marginTop: theme.spacing.unit / 2,
  },
  heading: {
    marginTop: theme.spacing.unit * 4,
  },
  headingBold: {
    fontWeight: 'bold',
  },
  headingDivider: {
    margin: `${theme.spacing.unit}px 0 ${theme.spacing.unit * 2}px`,
  },
  headingLink: {
    marginTop: -56 - bottomBorderWidth,
    position: 'absolute',
    '@media (min-width: 1px) and (orientation: landscape)': { marginTop: -48 - bottomBorderWidth },
    [theme.breakpoints.up('sm')]: { marginTop: -64 - bottomBorderWidth },
  },
  tableRoot: {
    width: '100%',
    margin: `${theme.spacing.unit * 2}px 0`,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

export default styles;
