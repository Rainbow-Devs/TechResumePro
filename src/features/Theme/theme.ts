import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#003366', // Navy Blue
    },
    secondary: {
      main: '#87CEEB', // Sky Blue
    },
    background: {
      default: '#F2F2F2', // Light Gray
    },
    text: {
      primary: '#333333', // Dark Gray
      secondary: '#666666', // Medium Gray
    },
  },
  typography: {
    fontFamily: [
      'Roboto', 'Open Sans', '"Helvetica Neue"', 'Arial', 'sans-serif'
    ].join(','),
  },
});