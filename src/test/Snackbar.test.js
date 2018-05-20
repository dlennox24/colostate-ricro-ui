import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Snackbar, { slideTransition } from '../components/Snackbar';
import App from '../components/App';
import config from './_config.json';

class SnackbarTest extends React.Component {
  state = {
    snackbar: {
      open: false,
      transition: null,
    },
  };

  handleClick = (transition, slideProps = {}) => () => {
    this.setState({
      snackbar: {
        open: true,
        transition: transition.bind(this, slideProps),
      },
    });
  };

  updateState = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    return (
      <App config={config}>
        <Button
          onClick={this.handleClick(slideTransition, { direction: 'right' })}
          variant="raised"
        >
          Open Snackbar
        </Button>
        <Snackbar
          state={this.state.snackbar}
          type={'success'}
          onClose={this.updateState.bind(this, 'snackbar', { ...this.state.snackbar, open: false })}
          snackbarProps={{
            autoHideDuration: 5e3,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'left',
            },
          }}
        >
          This is a snackbar with the type: success
        </Snackbar>
      </App>
    );
  }
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SnackbarTest />, div);
});
