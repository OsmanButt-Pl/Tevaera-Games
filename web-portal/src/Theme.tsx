import red from '@material-ui/core/colors/red';
import { createTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createTheme({
  overrides: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    MuiFormControlLabel: {
      label: {
        fontWeight: 450,
      },
    },
  },
  palette: {
    primary: {
      main: '#520c75',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FAFAFF',
    },
  },
  spacing: 8,
});

export default theme;
