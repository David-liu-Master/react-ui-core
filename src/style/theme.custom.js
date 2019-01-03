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
    typography: {
      useNextVariants: true
    },
    fontSize: {
      unit: [14],
      units: [12, 14, 16, 18, 20, 24, 32, 48]
    },
    spacing: {
      unit: 8,
      units: [8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 640, 768]
    },
    Logo
  });

export default theme;
