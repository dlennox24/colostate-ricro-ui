import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

const Footer = ({ classes }) => {
  const footerLinks = [
    { name: 'Contact CSU', href: 'https://www.colostate.edu/contact/' },
    { name: 'Equal Opportunity', href: 'https://www.colostate.edu/equal-opportunity' },
    { name: 'Privacy Statement', href: 'https://www.colostate.edu/privacy' },
    { name: 'Disclaimer', href: 'https://www.colostate.edu/disclaimer' },
  ];
  return (
    <AppBar position="static" component="footer">
      <Toolbar>
        <Grid
          className={classes.footer}
          container
          justify="space-around"
          alignItems="center"
          alignContent="center"
        >
          <Grid item md={6} className={classes.copyLinks}>
            <div className={classes.footerText}>
              <nav className={classes.footerLinksContainer}>
                {footerLinks.map(link => (
                  <Typography
                    key={link.name}
                    className={classes.footerLink}
                    component="span"
                    variant="body2"
                  >
                    <a href={link.href}>{link.name}</a>
                  </Typography>
                ))}
              </nav>
              <Typography className={classes.copyright} component="p" variant="body2">
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
      </Toolbar>
    </AppBar>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired, // MUI withStyles()
};

export default withStyles(styles)(Footer);
