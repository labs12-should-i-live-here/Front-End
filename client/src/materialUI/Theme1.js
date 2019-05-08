import { createMuiTheme } from '@material-ui/core/styles';
import { purple, orange } from '@material-ui/core/colors';

const theme1 = createMuiTheme({
    palette: {
        primary: '#5afc7d',
        secondary: '#5afcda',
        third: '#5acdfc',
        fourth: '#5a7cfc',
        fifth: '#895ae1'
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