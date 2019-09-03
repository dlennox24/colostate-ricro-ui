import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import _ from 'lodash';
import augmentColorObjects from '../../utils/augmentColorObjects';

const csu = {
  primary: {
    green: { main: '#1E4D2B' },
    gold: { main: '#C8C372' },
    white: { main: '#FFFFFF' },
  },
  secondary: {
    black: { main: '#59595B' },
    aggieOrange: { main: '#D9782D' },
  },
  tertiary: {
    alfalfa: { main: '#C9D845' },
    canyon: { main: '#CC5430' },
    darkSlate: { main: '#105456' },
    reservoir: { main: '#12A4B6' },
    sunshine: { main: '#ECC530' },
  },
};
const alerts = {
  danger: { main: '#dc3545' },
  warning: { main: '#ffc107' },
  success: { main: '#28a745' },
  info: { main: '#17a2b8' },
};
const components = {
  code: {
    background: { main: '#1e1e1e' },
  },
};
export { alerts, csu, components };

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: csu.primary.green,
    secondary: csu.secondary.aggieOrange,
    // Clone these to allow for testing of the raw data with their exports
    alerts: _.cloneDeep(alerts),
    components: _.cloneDeep(components),
    csu: _.cloneDeep(csu),
  },
  typography: {
    fontFamily: '"prox-regular", "Helvetica", "Arial", sans-serif',
    h1: { fontFamily: '"factoria-book", "Helvetica", "Arial", sans-serif' },
    h2: { fontFamily: '"factoria-book", "Helvetica", "Arial", sans-serif' },
    h3: { fontFamily: '"factoria-book", "Helvetica", "Arial", sans-serif' },
    h4: { fontFamily: '"factoria-book", "Helvetica", "Arial", sans-serif' },
    h5: { fontFamily: '"prox-regular", "Helvetica", "Arial", sans-serif' },
    h6: { fontFamily: '"prox-regular", "Helvetica", "Arial", sans-serif' },
    subheading: { fontFamily: '"prox-regular", "Helvetica", "Arial", sans-serif' },
    body2: { fontFamily: '"prox-regular", "Helvetica", "Arial", sans-serif' },
    body1: { fontFamily: '"prox-regular", "Helvetica", "Arial", sans-serif' },
    caption: { fontFamily: '"prox-regular", "Helvetica", "Arial", sans-serif' },
    button: { fontFamily: '"prox-semibold", "Helvetica", "Arial", sans-serif' },
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 1,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  zIndex: { navDrawer: 1300 },
});

augmentColorObjects({
  obj: theme.palette,
  augmentColorFunc: theme.palette.augmentColor,
  modKeys: ['alerts', 'csu', 'components'],
});
export default theme;
