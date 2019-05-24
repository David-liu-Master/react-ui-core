import { createMuiTheme } from '@material-ui/core/styles';
import Logo from '../Logo';

const theme = (primary, secondary) =>
  createMuiTheme({
    palette: {
      primary: {
        main: primary
      },
      secondary: {
        main: secondary
      }
    },
    fontSize: {
      unit: [14],
      units: [12, 14, 16, 18, 20, 24, 32, 48]
    },
    Logo
  });

export default theme;
