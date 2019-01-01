import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import React from 'react';

const IndexPage = () => (
  <React.Fragment>
    <Typography variant="h1">heading h1</Typography>
    <Typography variant="h2">heading h2</Typography>
    <Typography variant="h3">heading h3</Typography>
    <Typography variant="h4">heading h4</Typography>
    <Typography variant="h5">heading h5</Typography>
    <Typography variant="h6">heading h6</Typography>
    <Typography variant="subtitle1">subtitle1</Typography>
    <Typography variant="body1">body1</Typography>
    <Typography variant="body2">body2</Typography>
    <Typography variant="caption">caption</Typography>
    <Typography variant="button">button</Typography>
    <a href="#root">anchor</a>
    <CustomLp time={10e3} />
  </React.Fragment>
);

export default IndexPage;

const custStyles = () => ({
  root: {
    height: '5px',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'rgb(183, 197, 187)',
    margin: '8px 0',
  },
  bar: {
    top: 0,
    left: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#1E4D2B',
    width: '100%',
    animationName: 'fullWidthGrow',
    animationTimingFunction: 'linear',
  },
  barFull: {
    width: '100%',
  },
  '@global': {
    '@keyframes fullWidthGrow': {
      from: { width: '0%' },
      to: { width: '100%' },
    },
  },
});

class cssLp extends React.Component {
  state = {
    isPaused: true,
  };

  start = () => {
    if (this.state.isPaused) {
      this.setState({ isPaused: false });
    } else {
      clearInterval(this.timer);
    }
  };

  setup = () => {
    this.timer = setInterval(this.start, this.props.delay || 0);
  };

  togglePause = () => {
    this.setState(state => ({
      isPaused: !state.isPaused,
    }));
  };

  componentDidMount() {
    this.setup();
  }

  render() {
    const { classes, time } = this.props;
    const { isPaused } = this.state;
    return (
      <React.Fragment>
        <div
          className={classNames(classes.root)}
          onMouseEnter={this.togglePause}
          onMouseLeave={this.togglePause}
        >
          <div
            className={classNames(classes.bar, isPaused && classes.barFull)}
            style={{
              animationDuration: `${time / 1e3}s`,
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
          />
        </div>
        <Button onClick={this.togglePause}>{isPaused ? 'Play' : 'Pause'}</Button>
      </React.Fragment>
    );
  }
}
const CustomLp = withStyles(custStyles)(cssLp);
