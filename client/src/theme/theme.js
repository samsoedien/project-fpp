import { createMuiTheme } from '@material-ui/core';
import { grey, red, teal } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: teal[300],
      main: teal[500],
      dark: teal[700],
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
    h2: {
      fontFamily: '"Great Vibes", cursive',
      fontSize: '6rem',
    }
  },
});

export default theme;
