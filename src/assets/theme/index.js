const csu = {
  primary: {
    green: '#1E4D2B',
    gold: '#C8C372',
    white: '#FFFFFF',
  },
  secondary: {
    black: '#59595B',
    aggieOrange: '#D9782D',
  },
  tertiary: {
    alfalfa: '#C9D845',
    canyon: '#CC5430',
    darkSlate: '#105456',
    reservoir: '#12A4B6',
    sunshine: '#ECC530',
  },
};

export default {
  palette: {
    type: 'light',
    // type: 'dark',
    primary: {
      main: '#1e4d2b',
    },
    secondary: {
      main: '#d8772d',
    },
    csu,
    alerts: {
      danger: '#dc3545',
      warning: '#ffc107',
      success: '#28a745',
      info: '#17a2b8',
    },
    icon: {
      main: csu.secondary.black,
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: '"prox-regular", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"factoria-book", "Helvetica", "Arial", sans-serif',
    },
    h2: {
      fontFamily: '"factoria-book", "Helvetica", "Arial", sans-serif',
    },
    h3: {
      fontFamily: '"factoria-book", "Helvetica", "Arial", sans-serif',
    },
    h4: {
      fontFamily: '"factoria-book", "Helvetica", "Arial", sans-serif',
    },
    h5: {
      fontFamily: '"prox-regular", "Helvetica", "Arial", sans-serif',
    },
    h6: {
      fontFamily: '"prox-regular", "Helvetica", "Arial", sans-serif',
    },
    subheading: {
      fontFamily: '"prox-regular", "Helvetica", "Arial", sans-serif',
    },
    body2: {
      fontFamily: '"prox-regular", "Helvetica", "Arial", sans-serif',
    },
    body1: {
      fontFamily: '"prox-regular", "Helvetica", "Arial", sans-serif',
    },
    caption: {
      fontFamily: '"prox-regular", "Helvetica", "Arial", sans-serif',
    },
    button: {
      fontFamily: '"prox-semibold", "Helvetica", "Arial", sans-serif',
    },
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
  zIndex: {
    navDrawer: 1300,
  },
};
