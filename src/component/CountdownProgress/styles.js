const styles = theme => ({
  root: {
    height: '5px',
    position: 'relative',
    overflow: 'hidden',
    margin: '8px 0',
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
    backgroundColor: theme.palette.primary.light,
  },
  primaryBar: {
    backgroundColor: theme.palette.primary.main,
  },
});

export default styles;
