import colorToRgba from '../../../utils/colorToRgba';

const createBackgroundDrag = (color, getContrastText) => {
  return {
    background: colorToRgba(color, 0.75),
    borderColor: color,
    color: getContrastText(color),
  };
};

const styles = theme => ({
  root: {
    height: '100%',
    position: 'relative',
    width: '100%',
    '&:focus': { outline: 'none' },
  },
  blur: { filter: 'blur(2px)' },
  dragAccept: createBackgroundDrag(
    theme.palette.alerts.success.dark,
    theme.palette.getContrastText,
  ),
  dragDisable: createBackgroundDrag(theme.palette.grey[600], theme.palette.getContrastText),
  dragIconContainer: {
    '&>svg': {
      height: '2rem',
      width: '2rem',
    },
  },
  dragReject: createBackgroundDrag(theme.palette.alerts.danger.dark, theme.palette.getContrastText),
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
