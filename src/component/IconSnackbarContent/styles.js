import amber from '@material-ui/core/colors/amber';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
  primary: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
  secondary: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
  },
  success: {
    color: theme.palette.getContrastText(green[700]),
    backgroundColor: green[700],
  },
  error: {
    color: theme.palette.getContrastText(theme.palette.error.dark),
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    color: theme.palette.getContrastText(blue[700]),
    backgroundColor: blue[700],
  },
  warning: {
    color: theme.palette.getContrastText(amber[500]),
    backgroundColor: amber[500],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default styles;
