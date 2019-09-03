const styles = theme => ({
  dropDown: {
    marginLeft: theme.spacing(4),
    borderLeft: `2px solid ${theme.palette.divider}`,
  },
  active: {
    borderRight: `2px solid ${theme.palette.secondary.main}`,
  },
});

export default styles;
