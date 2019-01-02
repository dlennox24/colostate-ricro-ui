import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

class CountdownProgress extends React.Component {
  state = {
    isPaused: true,
  };

  componentDidMount() {
    this.setup();
  }

  start = () => {
    if (this.state.isPaused) {
      this.setState({ isPaused: false });
    } else {
      clearInterval(this.timer);
    }
  };

  setup = () => {
    this.timer = setTimeout(this.start, this.props.delay || 0);
  };

  handleTogglePause = () => {
    this.setState(state => ({
      isPaused: !state.isPaused,
    }));
  };

  render() {
    const { classes, height = 5, time = 3e3, variant = 'default' } = this.props;
    const { isPaused } = this.state;
    return (
      <React.Fragment>
        <div
          className={classNames(classes.root, classes[`${variant}Bg`])}
          onMouseEnter={this.handleTogglePause}
          onMouseLeave={this.handleTogglePause}
          style={{
            height: `${height}px`,
          }}
        >
          <div
            className={classNames(classes.bar, classes[`${variant}Bar`])}
            style={{
              animationDuration: `${time / 1e3}s`,
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}

CountdownProgress.propTypes = {
  classes: PropTypes.object.isRequired,
  delay: PropTypes.number,
  height: PropTypes.number,
  time: PropTypes.number,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'alertSuccess',
    'alertInfo',
    'alertDanger',
    'alertWarning',
    'default',
  ]),
};

export default withStyles(styles)(CountdownProgress);
