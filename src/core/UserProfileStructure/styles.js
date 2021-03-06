const styles = theme => ({
  profileImg: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing.unit,
  },
  column: {
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing.unit * 3,
    },
  },
  gridFlex: { display: 'flex' },
  groupsHeader: { marginTop: theme.spacing.unit * 2 },
  noGroups: { marginTop: theme.spacing.unit * 2 },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default styles;
