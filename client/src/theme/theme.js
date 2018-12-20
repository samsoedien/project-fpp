import { createMuiTheme } from '@material-ui/core';
import { grey, red, brown } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: brown[500],
      light: brown[300],
      dark: brown[700],
      red: red[800],
    },
    error: {
      light: red[300],
      main: red[500],
      dark: red[700],
    },
    custom: {
      light: grey[100],
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Roboto',
      'Montserrat',
    ].join(','),
    // fontSize: {},
    // headline: {},
    // title: {},
    // subheading: {},
    // body1: {},
    // body2: {},
    // caption: {},
    // button: {},
    // h1: {},
    h1: {
      textAlign: 'center',
      fontSize: '8rem',
      fontFamily: 'Timberline',
    },
    h2: {
      fontFamily: '"Great Vibes", cursive',
      fontSize: '6rem',
    },
    h3: {
      fontFamily: '"Great Vibes", cursive',
      fontSize: '6rem',
    },
    h4: {
      fontFamily: '"Montserrat", san-serif',
      fontWeight: 600,
      fontSize: '1.5em',
      color: brown[600],

      // textTransform: 'uppercase',
    },
    body1: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: '300',
      fontSize: '1rem',
    },
  },
});

export default theme;
