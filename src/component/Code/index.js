import { Typography } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import Highlight, { defaultProps } from 'prism-react-renderer';
import defaultTheme from 'prism-react-renderer/themes/vsDark';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

const Code = ({ classes, code, lang, theme = defaultTheme }) => (
  <Highlight
    {...defaultProps}
    className={classes.root}
    theme={theme}
    code={code.trim()}
    language={lang}
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <div className={classNames(classes.root, className)} style={style}>
        {tokens.map((line, i) => (
          <Typography {...getLineProps({ line, key: i })} variant="body1" component="div">
            <span className={classes.lineNo}>{i + 1}</span>
            <pre className={classes.pre}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </pre>
          </Typography>
        ))}
      </div>
    )}
  </Highlight>
);

Code.propTypes = {
  classes: PropTypes.object.isRequired, // MUI withStyles()
  code: PropTypes.string.isRequired,
  lang: PropTypes.string,
  theme: PropTypes.object,
};

export default withStyles(styles)(Code);
