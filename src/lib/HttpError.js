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

const style = theme => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '7%',
  },
  subheader: {
    padding: '15px 0',
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

    console.log(config);

    const errors = [{
        code: 401,
        title: 'Unauthenticated',
        subheader: 'You must login to view this content.',
        linkedButton: {
          title: 'Login',
          location: config.api.auth + '?return=' + window.location.pathname,
        },
      },
      {
        code: 403,
        title: 'Forbidden',
        subheader: 'You do not have the correct permissions to access this content.',
        linkedButton: {
          title: 'Contact Us',
          location: config.unit.contactHref,
        },
      },
      {
        code: 404,
        title: 'Not Found',
        subheader: 'No files to display. If you believe this to be an error please contact us.',
        linkedButton: {
          title: 'Contact Us',
          location: config.unit.contactHref,
        },
      },
      {
        code: 500,
        title: 'Internal Server Error',
        subheader: 'An error occured. Please try again. If this continues to happen please contact us.',
        linkedButton: {
          title: 'Contact Us',
          location: config.unit.contactHref,
        },
      }
    ];

    let error = _.find(errors, function(o) {
      return o.code === code;
    });
    error.linkedButton = linkedButton ? linkedButton : error.linkedButton;
    error.subheader = subheader ? subheader : error.subheader;

    return (
      <div className='text-center'>
        <Typography type='display3'>{error.code} - {error.title}</Typography>
        <Divider/>
        <Typography type='subheading' className={classes.subheader}>
          {error.subheader}
        </Typography>
        {_.isObject(error.linkedButton) ? (
          <a href={error.linkedButton.location}>
            <Button raised color='primary' className={classes.button}>
              {error.linkedButton.title}
            </Button>
          </a>): null
        }
      </div>
    );
  }
  render() {
    return (
      <div className={this.props.classes.wrapper}>
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