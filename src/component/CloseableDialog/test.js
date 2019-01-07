import React from 'react';
import ReactDOM from 'react-dom';
import CloseableDialog from './index';

class TestDialog extends React.Component {
  state = { isOpen: true };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    return <CloseableDialog onClose={this.handleClose} open={isOpen} />;
  }
}

test('renders without props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestDialog />, div);
});
