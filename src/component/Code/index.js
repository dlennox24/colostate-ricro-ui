import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import Highlight, { defaultProps } from 'prism-react-renderer';
import defaultTheme from 'prism-react-renderer/themes/vsDarkPlus';
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
          <div {...getLineProps({ line, key: i })}>
            <span className={classes.lineNo}>{i + 1}</span>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </div>
    )}
  </Highlight>
);

export default withStyles(styles)(Code);
