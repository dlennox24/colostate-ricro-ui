/* eslint-disable max-lines-per-function */
const bottomBorderWidth = 3;
const styles = theme => ({
  root: {
    '&>:nth-child(2)': { margin: 0 },
  },
  list: { margin: `0 0 ${theme.spacing.unit * 2}px` },
  listItem: { marginTop: theme.spacing.unit / 2 },
  headingContainer: {},
  headingLinkIcon: {
    fontSize: 'inherit',
    margin: `0 ${theme.spacing.unit}px`,
    verticalAlign: 'middle',
  },
  heading: {
    cursor: 'pointer',
    marginTop: theme.spacing.unit * 4,
    '&:hover': {
      background: theme.palette.grey[300],
      borderRadius: theme.spacing.unit / 2,
    },
  },
  headingBold: { fontWeight: 'bold' },
  headingDivider: { margin: `${theme.spacing.unit}px 0 ${theme.spacing.unit * 2}px` },
  headingLink: {
    marginTop: -56 - bottomBorderWidth,
    position: 'absolute',
    '@media (min-width: 1px) and (orientation: landscape)': { marginTop: -48 - bottomBorderWidth },
    [theme.breakpoints.up('sm')]: { marginTop: -64 - bottomBorderWidth },
  },
  image: {
    maxWidth: '100%',
    margin: `${theme.spacing.unit}px 0`,
  },
  tableRoot: {
    width: '100%',
    margin: `${theme.spacing.unit * 2}px 0`,
    overflowX: 'auto',
  },
  table: { minWidth: 700 },
});

export default styles;
