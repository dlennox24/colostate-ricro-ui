const styles = theme => ({
  '@global': {
    '@keyframes httpErrorPulse': {
      '0%': {
        color: theme.palette.grey[500],
      },
      '50%': {
        color: theme.palette.alerts.danger,
      },
      '100%': {
        color: theme.palette.grey[500],
      },
    },
  },
  button: {
    margin: theme.spacing.unit,
  },
  mdIcon: {
    fontSize: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit,
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    flexDirection: 'column',
  },
  subheader: {
    padding: '15px 0',
  },
  errorContainer: {
    width: '100%',
  },
  pulse: {
    animation: 'httpErrorPulse 3s infinite',
  },
  title: {
    wordBreak: 'break-word',
  },
});

export default styles;
