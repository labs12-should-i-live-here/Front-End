import { createMuiTheme } from '@material-ui/core/styles';
import { purple, orange } from '@material-ui/core/colors';

const theme1 = createMuiTheme({
    palette: {
        primary: blue,
        secondary: purple,
        third: orange
      },
    palette: {
        primary: {
          light: palette.primary[300],
          main: palette.primary[500],
          dark: palette.primary[700],
          contrastText: getContrastText(palette.primary[500]),
        },
        secondary: {
          light: palette.secondary.A200,
          main: palette.secondary.A400,
          dark: palette.secondary.A700,
          contrastText: getContrastText(palette.secondary.A400),
        },
        third: {
          light: palette.secondary.A200,
          main: palette.secondary.A400,
          dark: palette.secondary.A700,
          contrastText: getContrastText(palette.secondary.A400),
        },
        error: {
          light: palette.error[300],
          main: palette.error[500],
          dark: palette.error[700],
          contrastText: getContrastText(palette.error[500]),
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