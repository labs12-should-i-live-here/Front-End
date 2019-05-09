import { createMuiTheme } from '@material-ui/core/styles';
import { purple, orange } from '@material-ui/core/colors';

const theme1 = createMuiTheme({
    palette: {
        primary: {
            main: '#5a7cfc',
            light: '#5acdfc',
            medium: '#895ae1',
            contrastText: '#5acdfc'
        },
        secondary: {
            main: '#5afcda',
            dark: '#5afc7d'
        },
        error: {
            main: '#895ae1'
        },
      },
      typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
      typography: {
        // In Japanese the characters are usually larger.
        fontSize: 12,
      },
      typography: {
        // Tell Material-UI what's the font-size on the html element is.
        htmlFontSize: 10,
      },
      overrides: {
        MuiButton: { // Name of the component ⚛️ / style sheet
          text: { // Name of the rule
            color: 'white', // Some CSS
          },
        },
      },
})

export default theme1;