import { createMuiTheme } from '@material-ui/core';
import { red, teal } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal.A400,
    },
    secondary: red,
  },
});

export default theme;
