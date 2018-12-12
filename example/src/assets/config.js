import {
  mdiAccount,
  mdiAccountMultiple,
  mdiAlertCircle,
  mdiChevronDoubleDown,
  mdiEraser,
  mdiFolderNetwork,
  mdiNetworkOffOutline,
} from '@mdi/js';

export default {
  app: {
    name: 'Test Config0',
    hasLogin: true,
    nav: [
      [
        {
          name: 'Committees',
          icon: mdiAccountMultiple,
          link: '/committees',
        },
        {
          name: 'HttpError',
          icon: mdiAlertCircle,
          link: '/http-error',
          subNav: [
            [
              {
                name: '401 - Not Authenticated',
                link: '/401',
              },
              {
                name: '403 - Forbidden',
                link: '/403',
              },
              {
                name: '404 - Not Found',
                link: '/404',
              },
              {
                name: '500 - Internal Server Error',
                link: '/500',
              },
            ],
          ],
        },
        {
          name: 'User Profile',
          icon: mdiAccount,
          link: '/user-profile',
        },
      ],
      [
        {
          name: 'Example Dropdown (Level 0)',
          icon: mdiChevronDoubleDown,
          subNav: [
            [
              {
                name: 'Level 1',
                icon: mdiFolderNetwork,
                subNav: [
                  [
                    {
                      name: 'Level 2 - Section 1 - 1',
                      link: '/',
                    },
                    {
                      name: 'Level 2 - Section 1 - 2',
                      icon: mdiNetworkOffOutline,
                      link: '/',
                    },
                  ],
                  [
                    {
                      name: 'Level 2 - Section 2',
                      icon: mdiEraser,
                      link: '/',
                    },
                  ],
                ],
              },
            ],
            [
              {
                name: 'Level 1 - Section 2',
                icon: mdiEraser,
                link: '/',
              },
            ],
          ],
        },
        {
          name: 'Example 404 Route',
          icon: mdiFolderNetwork,
          link: '/does-not-exist',
        },
      ],
    ],
  },
  defaultState: {},
};
