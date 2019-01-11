import Collapse from '@material-ui/core/Collapse';
import withStyles from '@material-ui/core/styles/withStyles';
import { MarkdownParser } from 'colostate-ricro-ui';
import PropTypes from 'prop-types';
import React from 'react';
import aboutMarkdown from '../../assets/demo.md';

const styles = () => ({
  wrapper: {
    maxWidth: 1280,
    margin: '0 auto',
  },
});

class AboutPage extends React.Component {
  state = {
    md: '',
  };

  componentDidMount() {
    fetch(aboutMarkdown)
      .then(response => response.text())
      .then(md => {
        this.setState({ md });
      });
  }

  render() {
    const { md } = this.state;
    return (
      <Collapse className={this.props.classes.wrapper} in={md !== ''}>
        <MarkdownParser source={md} />
      </Collapse>
    );
  }
}

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired, // MUI withStyles()
};

export default withStyles(styles)(AboutPage);
