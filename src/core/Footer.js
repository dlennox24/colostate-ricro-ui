import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  '@global': {},
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: '0.85em',
    marginLeft: theme.spacing.unit * -2,
    marginRight: theme.spacing.unit * -2,
    padding: theme.spacing.unit,
    '& img': {
      maxHeight: 65,
    },
  },
  footerLinks: {
    lineHeight: `${theme.spacing.unit * 4}px`,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  footerLink: {
    borderRight: `${theme.palette.common.white} solid 1px`,
    display: 'initial',
    padding: '0px 10px',
    '&:first-child': {
      paddingLeft: 0,
    },
    '&:last-child': {
      border: 'none',
      paddingRight: 0,
    },
    '& a': {
      textDecoration: 'none',
      color: theme.palette.common.white,
      '&:hover': {
        color: theme.palette.csuBrand.primary.white,
        borderBottom: `2px solid ${theme.palette.csuBrand.primary.gold}`,
      },
    },
  },
  footerText: {
    display: 'table',
    margin: '0 auto',
  },
  copyLinks: {
    width: '100%',
  },
  csuLogo: {
    width: '100%',
  },
  copyright: {
    color: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
});
const Footer = props => {
  const classes = props.classes;
  return (
    <footer className={classes.footer}>
      <Grid container justify="space-around" alignItems="center" alignContent="center">
        <Grid item md={6} className={classes.copyLinks}>
          <div className={classes.footerText}>
            <div className={classes.footerLinks}>
              <Typography className={classes.footerLink} component="span" variant="body1">
                <a href="https://www.colostate.edu/contact/">Contact CSU</a>
              </Typography>
              <Typography className={classes.footerLink} component="span">
                <a href="https://www.colostate.edu/equal-opportunity">Equal Opportunity</a>
              </Typography>
              <Typography className={classes.footerLink} component="span">
                <a href="https://www.colostate.edu/privacy">Privacy Statement</a>
              </Typography>
              <Typography className={classes.footerLink} component="span">
                <a href="https://www.colostate.edu/disclaimer">Disclaimer</a>
              </Typography>
            </div>
            <Typography className={classes.copyright} component="p" paragraph>
              &copy; {new Date().getFullYear()} Colorado State University, Fort Collins, Colorado
              80523 USA
            </Typography>
          </div>
        </Grid>
        <Grid item md={6} className={classes.csuLogo}>
          <a href="http://www.colostate.edu/">
            <img
              src="https://www.colostate.edu/wp-content/themes/csuhome-theme/assets/img/csu-logo-oneline.svg"
              alt="Colorado State University"
            />
          </a>
        </Grid>
      </Grid>
    </footer>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
