import React, {
  Component,
} from 'react';
import ReactDOM from 'react-dom';
import Button from 'material-ui/Button';
import Snackbar from './Snackbar';
import App from './App';
import config from '../demo/config.json';

class SnackbarTest extends Component {
  state = {
    snackbars: {
      default: false,
    },
  }

  onRequestClose = type => {
    console.log('close: ' + type);
    this.setState({
      snackbars: {
        ...this.state.snackbars,
        [type]: false,
      }
    });
  }
  onRequestOpen = type => {
    console.log('open: ' + type);
    this.setState({
      snackbars: {
        ...this.state.snackbars,
        [type]: true,
      }
    });
  }

  render() {
    let classes = this.props.classes;
    return (
      <App config={config}>
        <Button
          onClick={this.onRequestOpen.bind(this, 'default')}
          raised
          >
          default
        </Button>
        <Snackbar
          open={this.state.snackbars.default}
          message='Default snackbar'
          onRequestClose={this.onRequestClose.bind(this, 'default')}
          />
      </App>
    );
  }
}


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SnackbarTest />, div);
});