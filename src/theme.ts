import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      // main: "#023047",
      main: "#232323",
    },
    secondary: {
      main: "#FB8500",
    },
  },
  typography: {
    fontFamily: "Helvetica Neue"
  }
});

// Mudar o tamanho da fonte baseando-se no dispositivo
theme = responsiveFontSizes(theme)
export default theme
