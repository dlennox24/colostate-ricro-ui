const styles = theme => ({
  root: {
    fontSize: theme.typography.body1.fontSize,
    textAlign: 'left',
    margin: theme.spacing(2, 0),
    padding: theme.spacing(1.5),
    paddingLeft: 0,
    overflowX: 'auto',
    width: '99.9%', // Hides background overflow when scrollbar is present
    '& .token-line': {
      lineHeight: '1.1em',
      whiteSpace: 'nowrap',
      paddingRight: theme.spacing(1),
      width: 'fit-content',
      fontFamily: 'monospace',
    },
    '&:hover::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.csu.primary.gold.main,
      transition: 'background-color 2s ease',
    },
    '&::-webkit-scrollbar-button': { display: 'none' },
    '&::-webkit-scrollbar-thumb': { backgroundColor: 'transparent' },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: theme.palette.csu.primary.gold.dark,
    },
    '&::-webkit-scrollbar-track:hover': { backgroundColor: 'unset' },
    '&::-webkit-scrollbar': { height: 8 },
  },
  lineNo: {
    color: theme.palette.grey[500],
    borderRight: `1px solid ${theme.palette.grey[500]}`,
    display: 'inline-block',
    minWidth: '2.4em',
    userSelect: 'none',
    marginRight: theme.spacing(2),
    fontSize: theme.typography.body1.fontSize,
    lineHeight: theme.spacing(2) + 'px',
    textAlign: 'right',
    paddingRight: theme.spacing(1),
  },
  pre: {
    display: 'initial',
    margin: 0,
    padding: 0,
  },
});
export default styles;
