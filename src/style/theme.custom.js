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
    Logo
  });

export default theme;
