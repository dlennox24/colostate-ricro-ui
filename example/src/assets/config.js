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
          link: '/example',
          subNav: [
            [
              {
                name: 'Level 1',
                icon: mdiFolderNetwork,
                link: '/level-1',
                subNav: [
                  [
                    {
                      name: 'Level 2 - Section 1 - 1',
                      link: '/l2-s1-1',
                    },
                    {
                      name: 'Level 2 - Section 1 - 2',
                      icon: mdiNetworkOffOutline,
                      link: '/l2-s1-2',
                    },
                  ],
                  [
                    {
                      name: 'Level 2 - Section 2',
                      icon: mdiEraser,
                      link: '/l2-s2',
                    },
                  ],
                ],
              },
            ],
            [
              {
                name: 'Level 1 - Section 2',
                icon: mdiEraser,
                link: '/l1-s2',
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
