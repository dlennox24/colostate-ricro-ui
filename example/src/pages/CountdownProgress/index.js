import { Typography } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import { CountdownProgress } from 'colostate-ricro-ui';
import PropTypes from 'prop-types';
import React from 'react';

const CountdownProgressPage = () => (
  <React.Fragment>
    <Typography variant="h5">defalut</Typography>
    <CountdownProgress />
    <Typography variant="h5">primary</Typography>
    <CountdownProgress variant="primary" time={4e3} />
    <Typography variant="h5">alertDanger</Typography>
    <CountdownProgress variant="alertDanger" time={7e3} />
    <Typography variant="h5">alertSuccess</Typography>
    <CountdownProgress variant="alertSuccess" time={5e3} height={15} />
    <Typography variant="h5">alertInfo</Typography>
    <CountdownProgress variant="alertInfo" time={10e3} />
    <Typography variant="h5">alertWarning</Typography>
    <CountdownProgress variant="alertWarning" time={2e3} />
    <Typography variant="h5">secondary</Typography>
    <CountdownProgress variant="secondary" time={6e3} />
    <Typography variant="h5">MUI LinearProgress</Typography>
    <LinearDeterminate time={6e3} />
  </React.Fragment>
);

export default CountdownProgressPage;

const pollingInterval = 5;
class LinearDeterminate extends React.Component {
  state = {
    completed: 0,
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, pollingInterval);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { time } = this.props;
    const { completed } = this.state;
    if (completed === 100) {
      clearInterval(this.timer);
    } else {
      const eq = (pollingInterval / time) * 100;
      this.setState({ completed: Math.min(completed + eq, 100) });
    }
  };

  render() {
    return <LinearProgress variant="determinate" value={this.state.completed} />;
  }
}

LinearDeterminate.propTypes = {
  time: PropTypes.number,
};
