/* eslint-disable max-lines-per-function */
const styles = theme => ({
  root: {
    '&>:nth-child(2)': { margin: 0 },
  },
  list: { margin: `0 0 ${theme.spacing.unit * 2}px` },
  listItem: { marginTop: theme.spacing.unit / 2 },
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
