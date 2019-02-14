import colorToRgba from '../../../utils/colorToRgba';

const styles = theme => ({
  root: {
    height: '100%',
    position: 'relative',
    width: '100%',
    '&:focus': { outline: 'none' },
  },
  blur: { filter: 'blur(2px)' },
  dragAccept: {
    background: colorToRgba(theme.palette.alerts.success.dark, 0.75),
    borderColor: theme.palette.alerts.success.dark,
    color: theme.palette.getContrastText(theme.palette.alerts.success.dark),
  },
  dragDisable: {
    background: colorToRgba(theme.palette.grey[600], 0.75),
    borderColor: theme.palette.grey[600],
    color: theme.palette.getContrastText(theme.palette.grey[600]),
  },
  dragIconContainer: {
    '&>svg': {
      height: '2rem',
      width: '2rem',
    },
  },
  dragReject: {
    background: colorToRgba(theme.palette.alerts.danger.dark, 0.75),
    borderColor: theme.palette.alerts.danger.dark,
    color: theme.palette.getContrastText(theme.palette.alerts.danger.dark),
  },
  dragRoot: {
    alignItems: 'center',
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 3,
    bottom: 0,
    display: 'flex',
    filter: 'blur(0px)',
    flexDirection: 'column',
    fontWeight: 'bold',
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 10,
  },
});

export default styles;
