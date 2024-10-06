import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const purpleTheme = createTheme({
  // typography: {
  //   fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  // },
  palette: {
    primary: {
      main: '#262254',
    },
    secondary: {
      main: '#543884',
    },
    error: {
      main: red.A400,
    },
  },
});

