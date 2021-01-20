import {createMuiTheme} from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme(
  {
    props: {
      // Name of the component ⚛️
      MuiButtonBase: {
        // The default props to change
        disableRipple: false, // No more ripple, on the whole application 💣!
      },
    },
    typography: {
      fontFamily: `"Noto Sans TC","Roboto", "Helvetica", "Arial", sans-serif`,
      fontWeightLight: 200,
      fontWeightRegular: 300
    },
    palette: {
      primary: {
        main: '#B60033',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#ffffff',
        contrastText: '#000000'
      },
      error: {
        main: red.A400,
      },
      background: {
        default: '#fff',
      },
    },
  }
);

export default theme;
