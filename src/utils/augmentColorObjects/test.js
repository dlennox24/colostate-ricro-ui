import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { alerts, csu } from '../../assets/theme';
import augmentColorObjects from './index';

const palette = {
  type: 'light',
  primary: csu.primary.green,
  secondary: csu.secondary.aggieOrange,
  alerts,
  csu,
};

const augmentColorObjectsFunc = augmentColorObjects({
  obj: palette,
  augmentColorFunc: createMuiTheme({
    palette,
  }).palette.augmentColor,
  modKeys: ['alerts', 'csu'],
});

const csuJson = {
  primary: {
    green: {
      main: '#1E4D2B',
      light: 'rgb(75, 112, 85)',
      dark: 'rgb(21, 53, 30)',
      contrastText: '#fff',
    },
    gold: {
      main: '#C8C372',
      light: 'rgb(211, 207, 142)',
      dark: 'rgb(140, 136, 79)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    white: {
      main: '#FFFFFF',
      light: 'rgb(255, 255, 255)',
      dark: 'rgb(178, 178, 178)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
  },
  secondary: {
    black: {
      main: '#59595B',
      light: 'rgb(122, 122, 123)',
      dark: 'rgb(62, 62, 63)',
      contrastText: '#fff',
    },
    aggieOrange: {
      main: '#D9782D',
      light: 'rgb(224, 147, 87)',
      dark: 'rgb(151, 84, 31)',
      contrastText: '#fff',
    },
  },
  tertiary: {
    alfalfa: {
      main: '#C9D845',
      light: 'rgb(211, 223, 106)',
      dark: 'rgb(140, 151, 48)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    canyon: {
      main: '#CC5430',
      light: 'rgb(214, 118, 89)',
      dark: 'rgb(142, 58, 33)',
      contrastText: '#fff',
    },
    darkSlate: {
      main: '#105456',
      light: 'rgb(63, 118, 119)',
      dark: 'rgb(11, 58, 60)',
      contrastText: '#fff',
    },
    reservoir: {
      main: '#12A4B6',
      light: 'rgb(65, 182, 196)',
      dark: 'rgb(12, 114, 127)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    sunshine: {
      main: '#ECC530',
      light: 'rgb(239, 208, 89)',
      dark: 'rgb(165, 137, 33)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
  },
};
test('theme.palette.csu should have main, light, dark, contrastText for each type', () => {
  expect(JSON.stringify(augmentColorObjectsFunc.csu)).toBe(JSON.stringify(csuJson));
});

const alertsJson = {
  danger: {
    main: '#dc3545',
    light: 'rgb(227, 93, 106)',
    dark: 'rgb(154, 37, 48)',
    contrastText: '#fff',
  },
  warning: {
    main: '#ffc107',
    light: 'rgb(255, 205, 56)',
    dark: 'rgb(178, 135, 4)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  success: {
    main: '#28a745',
    light: 'rgb(83, 184, 106)',
    dark: 'rgb(28, 116, 48)',
    contrastText: '#fff',
  },
  info: {
    main: '#17a2b8',
    light: 'rgb(69, 180, 198)',
    dark: 'rgb(16, 113, 128)',
    contrastText: '#fff',
  },
};
test('theme.palette.alerts should have main, light, dark, contrastText for each type', () => {
  expect(JSON.stringify(augmentColorObjectsFunc.alerts)).toBe(JSON.stringify(alertsJson));
});
