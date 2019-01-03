import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

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

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: csu.primary.green,
    secondary: csu.secondary.aggieOrange,
    csu,
    alerts: {
      danger: { main: '#dc3545' },
      warning: { main: '#ffc107' },
      success: { main: '#28a745' },
      info: { main: '#17a2b8' },
    },
    icon: { main: 'rgba(0, 0, 0, 0.54)' },
  },
  typography: {
    useNextVariants: true,
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

function findMainColor(obj) {
  const keys = Object.keys(obj);
  debugger;
  if (keys.includes('main')) {
    return theme.palette.augmentColor(obj);
  }
  keys.map(subObj => findMainColor(subObj));
}

debugger;
const test = findMainColor(theme.palette);

Object.keys(theme.palette).map(paletteKey => {
  if (paletteKey === 'csu' || paletteKey === 'alerts') {
    Object.keys(theme.palette[paletteKey]).map(color => {
      debugger;
      return theme.palette.augmentColor(color);
    });
  }
  return theme.palette[paletteKey];
});

export default theme;
