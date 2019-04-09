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
    fontSize: 'inherit',
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
    marginTop: -56 - bottomBorderWidth,
    position: 'absolute',
    '@media (min-width: 1px) and (orientation: landscape)': { marginTop: -48 - bottomBorderWidth },
    [theme.breakpoints.up('sm')]: { marginTop: -64 - bottomBorderWidth },
  },
});

class Heading extends React.Component {
  state = { tooltip: 'Copy permalink' };

  handleCopy = () => {
    this.setState({ tooltip: 'Copied!' });
    setTimeout(() => this.setState({ tooltip: 'Copy permalink' }), 6e3);
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
        <Tooltip title={tooltip} placement="bottom-start">
          <Typography
            className={classNames(
              classes.heading,
              level > 3 && classes.headingBold,
              level === 4 && classes.headingH4,
            )}
            variant={variant}
            onClick={this.handleCopy}
            component={variant.charAt(0) === 'h' ? variant : null}
            {...props}
          >
            <IconLink className={classes.headingLinkIcon} />
            {children[0]}
          </Typography>
        </Tooltip>
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
