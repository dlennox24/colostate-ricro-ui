/* eslint-disable max-lines-per-function */
const styles = theme => ({
  root: {
    '&>:nth-child(2)': { margin: 0 },
  },
  list: { margin: theme.spacing(0, 0, 2) },
  listItem: { marginTop: theme.spacing(1 / 2) },
  image: {
    maxWidth: '100%',
    margin: theme.spacing(1, 0),
  },
  tableRoot: {
    width: '100%',
    margin: theme.spacing(2, 0),
    overflowX: 'auto',
  },
  table: { minWidth: 700 },
});

export default styles;
