import Divider from '@material-ui/core/Divider';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const styles = theme => ({
  listItem: {
    // marginTop: theme.spacing.unit,
  },
  headerDivider: {
    marginBottom: theme.spacing.unit,
  },
});

const renderers = {
  /* eslint-disable-next-line react/prop-types */
  heading: withStyles(styles)(({ level, classes, ...props }) => {
    let variant;
    switch (level) {
      case 1:
        variant = 'h2';
        break;
      case 2:
        variant = 'h3';
        break;
      case 3:
        variant = 'h4';
        break;
      default:
        variant = 'body1';
        break;
    }

    return (
      <React.Fragment>
        <Typography {...props} variant={variant} />
        {level < 4 && <Divider className={classes.headerDivider} />}
      </React.Fragment>
    );
  }),
  html: () => null,
  listItem: withStyles(styles)(({ classes, tight, ordered, ...props }) => (
    <li className={classes.listItem}>
      <Typography component="span" {...props} />
    </li>
  )),
  paragraph: props => <Typography variant="body1" {...props} paragraph />,
  thematicBreak: props => <Divider {...props} />,
};

export default function Markdown(props) {
  return <ReactMarkdown renderers={renderers} {...props} />;
}
