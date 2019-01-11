import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Code from '../Code';
import styles from './styles';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontSize: theme.typography.subtitle1.fontSize,
  },
}))(TableCell);

/* eslint-disable react/prop-types */
const renderers = {
  root: withStyles(styles)(({ classes, ...props }) => <div className={classes.root} {...props} />),
  code: ({ language, value: code }) => {
    return <Code lang={language} code={code} />;
  },
  heading: withStyles(styles)(({ level, classes, ...props }) => {
    const id = props.children[0].props.children.replace(/\s+/g, '-').toLowerCase();
    let variant;
    switch (level) {
      case 1:
        variant = 'h3';
        break;
      case 2:
        variant = 'h4';
        break;
      case 3:
        variant = 'h5';
        break;
      case 4:
        variant = 'h6';
        break;
      default:
        variant = 'body1';
        break;
    }

    return (
      <React.Fragment>
        <div className={classes.headingLink} id={id} />
        <Typography
          className={classNames(classes.heading, level > 3 && classes.headingBold)}
          variant={variant}
          {...props}
        />
        {level < 4 && <Divider className={classes.headingDivider} />}
      </React.Fragment>
    );
  }),
  html: () => null,
  list: withStyles(styles)(({ classes, tight, ordered, ...props }) => (
    <Typography className={classes.list} component={ordered ? 'ol' : 'ul'} {...props} />
  )),
  listItem: withStyles(styles)(({ classes, tight, ordered, ...props }) => (
    <li className={classes.listItem}>
      <Typography component="span" variant="body1" {...props} />
    </li>
  )),
  paragraph: props => <Typography variant="body1" {...props} paragraph />,
  table: withStyles(styles)(({ classes, children }) => (
    <Paper className={classes.tableRoot}>
      <Table className={classes.table}>{children}</Table>
    </Paper>
  )),
  tableHead: ({ children }) => <TableHead>{children}</TableHead>,
  tableBody: ({ children }) => <TableBody>{children}</TableBody>,
  tableRow: ({ children }) => <TableRow>{children}</TableRow>,
  tableCell: ({ children, align }) => (
    <StyledTableCell align={align || 'inherit'}>{children}</StyledTableCell>
  ),
  thematicBreak: props => <Divider {...props} />,
};

export default function Markdown(props) {
  return <ReactMarkdown renderers={renderers} {...props} />;
}
