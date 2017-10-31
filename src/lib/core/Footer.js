import React from 'react';
import {
  withStyles,
} from 'material-ui/styles';

const styles = theme => ({
  'footer': {
    backgroundColor: theme.palette.primary[500],
    color: theme.palette.common.fullWhite,
    fontSize: '0.85em',
    padding: '10px',
    '& .links': {
      lineHeight: '1.5em',
      marginBottom: '.5em',
      '& span': {
        padding: '0px 10px',
        borderRight: theme.palette.common.fullWhite + ' solid 2px',
        '&:first-child': {
          paddingLeft: 0,
        },
        '&:last-child': {
          border: 'none',
        },
        '& a': {
          color: theme.palette.common.fullWhite,
        }
      },
    },
    '& img': {
      maxHeight: '65px',
    },
  },
});
const Footer = (props) => {
  let classes = props.classes;
  return (
    <footer className={classes.footer}>
      <div className='container'>
        <div className='row justify-content-between align-items-center'>
          <div className='col-lg-8 col-md-6 text-center text-lg-left'>
            <div className='links'>
              <span>
                <a href='https://www.colostate.edu/contact/'>Contact CSU</a>
              </span>
              <span>
                <a href='https://www.colostate.edu/equal-opportunity'>Equal Opportunity</a>
              </span>
              <span>
                <a href='https://www.colostate.edu/privacy'>Privacy Statement</a>
              </span>
              <span>
                <a href='https://www.colostate.edu/disclaimer'>Disclaimer</a>
              </span>
            </div>
            &copy; {new Date().getFullYear()} Colorado State University, Fort Collins, Colorado 80523 USA
          </div>
          <div className='col-lg-4 col-md-6'>
            <a href='http://www.colostate.edu/'>
              <img src='https://www.colostate.edu/wp-content/themes/csuhome-theme/assets/img/csu-logo-oneline.svg' alt=''/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default withStyles(styles)(Footer);
