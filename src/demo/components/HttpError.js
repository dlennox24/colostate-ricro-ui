import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import { MenuItem } from 'material-ui/Menu';
import TextField from 'material-ui/TextField';
import HttpError from '../../lib/components/HttpError';
import config from '../config.json';

const styles = theme => ({
  textField: {},
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  demo: {
    padding: theme.spacing.unit * 4,
  },
});

class HttpErrorEx extends React.Component {
  state = {
    code: 401,
  };

  updateState = key => event => {
    this.setState({
      [key]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    const { code } = this.state;

    return (
      <div>
        <TextField
          label="Error Code"
          className={classes.textField}
          value={code}
          onChange={this.updateState('code')}
          margin="normal"
          select
        >
          <MenuItem value={401}>401 - Unauthenticated</MenuItem>
          <MenuItem value={403}>403 - Forbidden</MenuItem>
          <MenuItem value={404}>404 - Not Found</MenuItem>
          <MenuItem value={500}>500 - Internal Server Error</MenuItem>
        </TextField>
        <HttpError code={Number(code)} config={config} />
      </div>
    );
  }
}

HttpErrorEx.propTypes = {
  classes: PropTypes.any,
};

export default withStyles(styles)(HttpErrorEx);
