import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  '@global': {},
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: '0.85em',
    padding: theme.spacing.unit,
    '& img': {
      maxHeight: 65,
    },
  },
  footerLinks: {
    lineHeight: `${theme.spacing.unit * 4}px`,
  },
  footerLink: {
    padding: '0px 10px',
    borderRight: `${theme.palette.common.white} solid 1px`,
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
});
const Footer = props => {
  const classes = props.classes;
  return (
    <footer className={classes.footer}>
      <Grid container justify="space-around" alignItems="center" alignContent="center">
        <Grid item md={6} className={classes.copyLinks}>
          <div className={classes.footerText}>
            <div className={classes.footerLinks}>
              <span className={classes.footerLink}>
                <a href="https://www.colostate.edu/contact/">Contact CSU</a>
              </span>
              <span className={classes.footerLink}>
                <a href="https://www.colostate.edu/equal-opportunity">Equal Opportunity</a>{' '}
              </span>
              <span className={classes.footerLink}>
                <a href="https://www.colostate.edu/privacy">Privacy Statement</a>{' '}
              </span>
              <span className={classes.footerLink}>
                <a href="https://www.colostate.edu/disclaimer">Disclaimer</a>
              </span>
            </div>
            &copy; {new Date().getFullYear()} Colorado State University, Fort Collins, Colorado
            80523 USA
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
