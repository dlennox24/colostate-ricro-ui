import { mdiEraser, mdiFactory, mdiFolderNetwork } from '@mdi/js';

export default {
  app: {
    name: 'Test Config0',
    hasLogin: true,
    nav: [
      [
        {
          name: 'Addresses',
          icon: mdiEraser,
          link: '/user',
        },
      ],
      [
        {
          name: 'Location',
          icon: mdiFactory,
          subNav: [
            [
              {
                name: 'AddressesSub1',
                icon: mdiFolderNetwork,
                subNav: [
                  [
                    {
                      name: 'AddressesSub2',
                      icon: mdiEraser,
                      link: 'https://vpr.colostate.edu/ricro/contact-us',
                    },
                  ],
                  [
                    {
                      name: 'AddressesSub2Section2',
                      icon: mdiEraser,
                      link: 'https://vpr.colostate.edu/ricro/contact-us',
                    },
                  ],
                ],
              },
            ],
            [
              {
                name: 'AddressesSub1Section2',
                icon: mdiEraser,
                link: 'https://vpr.colostate.edu/ricro/contact-us',
              },
            ],
          ],
        },
        {
          name: 'Home Page (404)',
          icon: mdiFolderNetwork,
          link: '/home',
        },
        {
          name: 'Root',
          icon: mdiFolderNetwork,
          link: '/',
        },
        {
          name:
            "Super long name testing width of the drawer and the wrapping of the text because you shouldn't do this but testing must be done with massive run on sentences",
          icon: mdiFolderNetwork,
          link: 'https://vpr.colostate.edu/ricro/ibc',
        },
      ],
    ],
  },
  defaultState: {},
};
