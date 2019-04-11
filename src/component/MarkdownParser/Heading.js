import Divider from '@material-ui/core/Divider';
import withStyles from '@material-ui/core/styles/withStyles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import IconLink from 'mdi-material-ui/LinkVariant';
import PropTypes from 'prop-types';
import React from 'react';

const bottomBorderWidth = 3;
const styles = theme => ({
  root: {
    cursor: 'pointer',
    '&:hover svg': { display: 'inline-block' },
  },
  headingLinkIcon: {
    fontSize: '1.3rem',
    margin: `0 ${theme.spacing.unit}px`,
    verticalAlign: 'middle',
    color: theme.palette.grey[500],
    display: 'none',
  },
  heading: { marginTop: theme.spacing.unit * 4 },
  headingH4: { fontFamily: '"prox-light", "Helvetica", "Arial", sans-serif' },
  headingBold: { fontWeight: 'bold' },
  headingDivider: { margin: `${theme.spacing.unit}px 0 ${theme.spacing.unit * 2}px` },
  headingLink: {
    marginTop: -56 - 3 * theme.spacing.unit - bottomBorderWidth,
    position: 'absolute',
    '@media (min-width: 1px) and (orientation: landscape)': {
      marginTop: -48 - 3 * theme.spacing.unit - bottomBorderWidth,
    },
    [theme.breakpoints.up('sm')]: { marginTop: -64 - 3 * theme.spacing.unit - bottomBorderWidth },
  },
});

class Heading extends React.Component {
  state = { tooltip: 'Copy permalink' };

  handleCopy = id => () => {
    this.setState({ tooltip: 'Copied!' });
    const el = document.createElement('textarea');
    el.value = `${window.location.origin + window.location.pathname}#${id}`;
    el.setAttribute('readonly', '');
    el.style = { position: 'absolute', left: '-9999px' };
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setTimeout(() => this.setState({ tooltip: 'Copy permalink' }), 6e3);
  };

  handleScrollToHeader = id => () => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, null, `${window.location.pathname}#${id}`);
  };

  render() {
    const { tooltip } = this.state;
    const { children, level, classes, ...props } = this.props;
    const id = children[0].props.children.replace(/\s+/g, '-').toLowerCase();

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
      <div className={classes.root}>
        <div className={classes.headingLink} id={id} />
        <Typography
          className={classNames(
            classes.heading,
            level > 3 && classes.headingBold,
            level === 4 && classes.headingH4,
          )}
          variant={variant}
          onClick={this.handleScrollToHeader(id)}
          component={variant.charAt(0) === 'h' ? variant : null}
          {...props}
        >
          {children[0]}
          <Tooltip title={tooltip}>
            <IconLink className={classes.headingLinkIcon} onClick={this.handleCopy(id)} />
          </Tooltip>
        </Typography>
        {level < 4 && <Divider className={classes.headingDivider} />}
      </div>
    );
  }
}

Heading.propTypes = {
  children: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired, // MUI withStyles()
  level: PropTypes.number.isRequired,
};

export default withStyles(styles)(Heading);
