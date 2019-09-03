const styles = theme => ({
  profileImg: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(1),
  },
  column: {
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
    },
  },
  gridFlex: { display: 'flex' },
  groupsHeader: { marginTop: theme.spacing(2) },
  noGroups: { marginTop: theme.spacing(2) },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default styles;
