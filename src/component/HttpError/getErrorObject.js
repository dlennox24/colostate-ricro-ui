import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Icon from '@material-ui/core/Icon';
import { mdiCloseNetwork, mdiLoginVariant } from '@mdi/js';
import MdiIcon from '@mdi/react';
import React from 'react';

const getErrorObject = ({ classes, code, config, linkedButton, subheader }) => {
  const errors = {
    401: {
      code: 401,
      title: 'Not Authenticated',
      subheader: 'You must login to view this content.',
      linkedButton: [
        {
          icon: <MdiIcon path={mdiLoginVariant} />,
          title: 'Login',
          link: `${config.api.auth}?return=${window.location.pathname}`,
        },
      ],
    },
    403: {
      code: 403,
      title: 'Forbidden',
      subheader: 'You do not have the correct permissions to access this content.',
      linkedButton: [
        { icon: <Icon className={classes.mdIcon}>apps</Icon>, title: 'Apps', link: '/' },
        {
          icon: <Icon className={classes.mdIcon}>email</Icon>,
          title: 'Contact Us',
          link: config.unit.contactHref,
          buttonProps: { variant: 'outlined' },
        },
      ],
    },
    404: {
      code: 404,
      title: 'Not Found',
      subheader: (
        <React.Fragment>
          <Chip
            avatar={
              <Avatar>
                <MdiIcon path={mdiCloseNetwork} />
              </Avatar>
            }
            label={window.location.pathname}
            className={classes.chip}
          />
          <p>Unable to find this page. If you believe this to be an error please contact us.</p>
        </React.Fragment>
      ),
      linkedButton: [
        { icon: <Icon className={classes.mdIcon}>apps</Icon>, title: 'Apps', link: '/' },
        {
          icon: <Icon className={classes.mdIcon}>email</Icon>,
          title: 'Contact Us',
          link: config.unit.contactHref,
          buttonProps: { variant: 'outlined' },
        },
      ],
    },
    500: {
      code: 500,
      title: 'Internal Server Error',
      subheader:
        'An error occured. Please try again. If this continues to happen please contact us.',
      linkedButton: [
        {
          icon: <Icon className={classes.mdIcon}>email</Icon>,
          title: 'Contact Us',
          link: config.unit.contactHref,
        },
      ],
    },
  };

  const error = errors[code];
  error.linkedButton = linkedButton || error.linkedButton;
  error.subheader = subheader || error.subheader;
  return error;
};

export default getErrorObject;
