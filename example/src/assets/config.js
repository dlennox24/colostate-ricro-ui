import Icon from '@material-ui/core/Icon';
import MdiIcon from '@mdi/react';
import { mdiEraser, mdiFactory, mdiFolderNetwork } from '@mdi/js';
import React from 'react';

export default {
  app: {
    name: 'Test Config0',
    hasLogin: true,
    nav: [
      [
        {
          name: 'Addresses',
          icon: (
            <Icon>
              <MdiIcon path={mdiEraser} size={1} color="inherit" />
            </Icon>
          ),
          link: 'https: //vpr.colostate.edu/ricro/contact-us',
        },
      ],
      [
        {
          name: 'Location',
          icon: (
            <Icon>
              <MdiIcon path={mdiFactory} size={1} />
            </Icon>
          ),
          link: '/',
        },
        {
          name:
            "Super long name testing width of the drawer and the wrapping of the text because you shouldn't do this but testing must be done with massive run on sentences",
          icon: (
            <Icon>
              <MdiIcon path={mdiFolderNetwork} size={1} />
            </Icon>
          ),
          link: 'https: //vpr.colostate.edu/ricro/contact-us',
        },
      ],
    ],
  },
};
