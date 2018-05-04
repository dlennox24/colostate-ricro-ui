// @flow

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withStyles from 'material-ui/styles/withStyles';
import { LinearProgress } from 'material-ui/Progress';
import green from 'material-ui/colors/green';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';

const styles = theme => ({
  wrapper: {
    marginTop: '5px',
    margin: '0 auto',
    textAlign: 'center',
  },
  button: {
    boxShadow: 'none',
    background: 'none',
    width: '100%',
  },
  loadingButton: {
    display: 'none',
  },
  successButton: {
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: green[700],
    },
  },
});

class LoadMore extends React.Component {
  state = {
    loading: false,
    success: false,
    disabled: false,
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleButtonClick = () => {
    if (!this.state.loading) {
      this.setState(
        {
          success: false,
          loading: true,
          disabled: true,
        },
        () => {
          this.timer = setTimeout(() => {
            this.setState({
              loading: false,
              success: true,
              disabled: true,
            });
          }, 5e3);
        },
      );
    }
  };

  handleResetLoadingState = () => {
    this.timer = setTimeout(() => {
      this.setState({
        success: false,
        loading: false,
        disabled: false,
      });
    }, 2e3);
  };

  timer = undefined;

  render() {
    const { loading, success } = this.state;
    const classes = this.props.classes;
    let buttonClass = '';

    if (success) {
      buttonClass = classes.successButton;
      this.handleResetLoadingState();
    }

    if (loading) {
      buttonClass = classes.loadingButton;
    }

    return (
      <div className={classes.wrapper}>
        {loading && <LinearProgress color="secondary" size={60} />}
        <Button
          className={classnames(classes.button, buttonClass)}
          onClick={this.handleButtonClick}
          disabled={this.state.disabled}
        >
          {success ? <Icon>check</Icon> : <Icon>expand_more</Icon>}
        </Button>
      </div>
    );
  }
}

LoadMore.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoadMore);
