const styles = theme => ({
  root: {
    fontFamily: 'monospace',
    fontSize: theme.typography.body2.fontSize,
    textAlign: 'left',
    margin: '1em 0',
    padding: '0.6em 0.5em',
    overflowX: 'auto',
    width: '99.9%', // Hides background overflow when scrollbar is present
    '& .token-line': {
      lineHeight: '1.4em',
      whiteSpace: 'nowrap',
      paddingRight: '0.5em',
      width: 'fit-content',
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
    display: 'inline-block',
    minWidth: '2em',
    userSelect: 'none',
    borderRight: '2px solid white',
    marginRight: theme.spacing.unit,
    fontWeight: 'bold',
  },
});
export default styles;
