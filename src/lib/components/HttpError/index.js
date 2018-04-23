import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  withStyles,
} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faSignIn,
} from '@fortawesome/fontawesome-pro-regular';


const style = theme => ({
  '@global': {
    '@keyframes pulse': {
      '0%': {
        color: theme.palette.grey[500],
      },
      '50%': {
        color: theme.palette.alerts.danger,
      },
      '100%': {
        color: theme.palette.grey[500],
      },
    },
  },
  button: {
    margin: theme.spacing.unit,
  },
  faIcon: {
    marginRight: theme.spacing.unit,
  },
  mdIcon: {
    fontSize: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit,
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  subheader: {
    padding: '15px 0',
  },
  errorContainer: {
    textAlign: 'center',
    minWidth: '75%',
  },
  pulse: {
    animation: 'pulse 3s infinite',
  },
  title: {
    wordBreak: 'break-word',
  },
});

class HttpError extends Component {
  errorMessage = () => {
    const {
      classes,
      code,
      config,
      linkedButton,
      subheader,
    } = this.props;
    const errors = [{
      code: 401,
      title: 'Not Authenticated',
      subheader: 'You must login to view this content.',
      linkedButton: [{
        icon: (<FontAwesomeIcon className={classes.faIcon} icon={faSignIn}/>),
        title: 'Login',
        location: config.api.auth + '?return=' + window.location.pathname,
      }],
    }, {
      code: 403,
      title: 'Forbidden',
      subheader: 'You do not have the correct permissions to access this content.',
      linkedButton: [{
        icon: (<Icon className={classes.mdIcon}>apps</Icon>),
        title: 'Apps',
        location: '/',
      }, {
        icon: (<Icon className={classes.mdIcon}>email</Icon>),
        title: 'Contact Us',
        location: config.unit.contactHref,
      }],
    }, {
      code: 404,
      title: 'Not Found',
      subheader: (
        <div>
          <Typography variant='title'><code>{window.location.pathname}</code></Typography>
          <p>Unable to find this page. If you believe this to be an error please contact us.</p>
        </div>
      ),
      linkedButton: [{
        icon: (<Icon className={classes.mdIcon}>apps</Icon>),
        title: 'Apps',
        location: '/',
      }, {
        icon: (<Icon className={classes.mdIcon}>email</Icon>),
        title: 'Contact Us',
        location: config.unit.contactHref,
      }],
    }, {
      code: 500,
      title: 'Internal Server Error',
      subheader: 'An error occured. Please try again. If this continues to happen please contact us.',
      linkedButton: [{
        icon: (<Icon className={classes.mdIcon}>email</Icon>),
        title: 'Contact Us',
        location: config.unit.contactHref,
      }],
    }];

    let error = _.find(errors, function(o) {
      return o.code === code;
    });
    error.linkedButton = linkedButton ? linkedButton : error.linkedButton;
    error.subheader = subheader ? subheader : error.subheader;

    return (
      <div className={classes.errorContainer}>
        <Typography variant='display4' className={classes.pulse}>{error.code}</Typography>
        <Typography variant='display2' className={classes.title}>{error.title}</Typography>
        <Divider/>
        <Typography variant='subheading' className={classes.subheader}>
          {error.subheader}
        </Typography>
        {!_.isArray(error.linkedButton) ? null : error.linkedButton.map((button,i)=>(
          <a key={i} href={button.location}>
            <Button variant='raised' color='primary' className={classes.button}>
              {button.icon}
              {button.title}
            </Button>
          </a>
        ))}
      </div>
    );
  }

  render() {
    const {
      classes
    } = this.props;
    return (
      <div className={classes.wrapper}>
        {this.errorMessage()}
      </div>
    );
  }
}

HttpError.proptypes = {
  classes: PropTypes.object.isRequired,
  code: PropTypes.oneOf([401, 403, 404, 500]),
  config: PropTypes.object.isRequired,
  linkedButton: PropTypes.object,
  subheader: PropTypes.node,
};

export default withStyles(style)(HttpError);