import Fade from '@material-ui/core/Fade';
import { MarkdownParser } from 'colostate-ricro-ui';
import React from 'react';
import aboutMarkdown from '../../assets/demo.md';

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
      <Fade in={md !== ''}>
        <MarkdownParser source={md} />
      </Fade>
    );
  }
}

export default AboutPage;
