const shadeColor = ({ augmentColor, color, shade = 'light', magnitude = 3 }) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < magnitude; i++) {
    color = augmentColor({ main: color })[shade];
  }
  return color;
};

const styles = theme => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
    margin: '16px 0',
  },
  bar: {
    top: 0,
    left: 0,
    bottom: 0,
    position: 'absolute',
    width: '100%',
    animationName: 'CountdownProgress-fullWidthGrow',
    animationTimingFunction: 'linear',
  },
  primaryBg: {
    backgroundColor: shadeColor({
      augmentColor: theme.palette.augmentColor,
      color: theme.palette.primary.main,
    }),
  },
  primaryBar: {
    backgroundColor: theme.palette.primary.main,
  },
  secondaryBg: {
    backgroundColor: shadeColor({
      augmentColor: theme.palette.augmentColor,
      color: theme.palette.secondary.main,
    }),
  },
  secondaryBar: {
    backgroundColor: theme.palette.secondary.main,
  },
  alertDangerBg: {
    backgroundColor: shadeColor({
      augmentColor: theme.palette.augmentColor,
      color: theme.palette.alerts.danger,
    }),
  },
  alertDangerBar: {
    backgroundColor: theme.palette.alerts.danger,
  },
  alertWarningBg: {
    backgroundColor: shadeColor({
      augmentColor: theme.palette.augmentColor,
      color: theme.palette.alerts.warning,
    }),
  },
  alertWarningBar: {
    backgroundColor: theme.palette.alerts.warning,
  },
  alertSuccessBg: {
    backgroundColor: shadeColor({
      augmentColor: theme.palette.augmentColor,
      color: theme.palette.alerts.success,
    }),
  },
  alertSuccessBar: {
    backgroundColor: theme.palette.alerts.success,
  },
  alertInfoBg: {
    backgroundColor: shadeColor({
      augmentColor: theme.palette.augmentColor,
      color: theme.palette.alerts.info,
    }),
  },
  alertInfoBar: {
    backgroundColor: theme.palette.alerts.info,
  },
  defaultBg: {
    backgroundColor: shadeColor({
      augmentColor: theme.palette.augmentColor,
      color: theme.palette.grey[500],
    }),
  },
  defaultBar: {
    backgroundColor: theme.palette.grey[500],
  },
});

export default styles;
