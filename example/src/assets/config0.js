import IconAccount from 'mdi-material-ui/Account';
import IconAccountMultiple from 'mdi-material-ui/AccountMultiple';
import IconAlertCircle from 'mdi-material-ui/AlertCircle';
import IconBell from 'mdi-material-ui/Bell';
import IconChevronDoubleDown from 'mdi-material-ui/ChevronDoubleDown';
import IconEraser from 'mdi-material-ui/Eraser';
import IconFileTree from 'mdi-material-ui/FileTree';
import IconFolderNetwork from 'mdi-material-ui/FolderNetwork';
import IconGithubCircle from 'mdi-material-ui/GithubCircle';
import IconNetworkOffOutline from 'mdi-material-ui/NetworkOffOutline';
import React from 'react';

export default {
  api: {
    host: 'http://localhost',
    path: '/api/v3',
  },
  app: {
    name: 'colostate-ricro-ui',
    // hasLogin: false,
    // hasAutoLogin: true,
    nav: [
      [
        {
          name: 'Committees',
          icon: <IconAccountMultiple />,
          link: '/committees',
        },
        {
          name: 'Countdown Progress',
          icon: <IconAccountMultiple />,
          link: '/countdown-progress',
        },
        {
          name: 'HttpError',
          icon: <IconAlertCircle />,
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
          name: 'Snackbars',
          icon: <IconBell />,
          link: '/icon-snackbar-content',
        },
        {
          name: 'User Profile',
          icon: <IconAccount />,
          link: '/user-profile',
        },
      ],
      [
        {
          name: 'Example Dropdown (Level 0)',
          icon: <IconChevronDoubleDown />,
          link: '/example',
          subNav: [
            [
              {
                name: 'Level 1',
                icon: <IconFolderNetwork />,
                link: '/level-1',
                subNav: [
                  [
                    {
                      name: 'Level 2 - Section 1 - 1',
                      link: '/l2-s1-1',
                    },
                    {
                      name: 'Level 2 - Section 1 - 2',
                      icon: <IconNetworkOffOutline />,
                      link: '/l2-s1-2',
                    },
                  ],
                  [
                    {
                      name: 'Level 2 - Section 2',
                      icon: <IconEraser />,
                      link: '/l2-s2',
                    },
                  ],
                ],
              },
            ],
            [
              {
                name: 'Level 1 - Section 2',
                icon: <IconEraser />,
                link: '/l1-s2',
              },
            ],
          ],
        },
        {
          name: 'Example 404 Route',
          icon: <IconFolderNetwork />,
          link: '/does-not-exist',
        },
        {
          name: 'Example Root Route',
          icon: <IconFileTree />,
          link: '/',
        },
      ],
      [
        {
          name: 'GitHub Repo',
          icon: <IconGithubCircle />,
          link: 'https://github.com/csu-ricro/colostate-ricro-ui',
        },
      ],
    ],
  },
  // defaultState: { user },
};