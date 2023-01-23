import { colors } from '@mui/material';

const white = '#FFFFFF';
const black = '1E212E';

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: '#000000',
    main: '#AC4E4E',
    light: '#3f404e',
  },
  secondary: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue.A400,
    light: colors.blue.A400,
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: '#1E212E',
    secondary: colors.blueGrey[600],
    link: colors.blue[600],
  },
  link: colors.blue[800],
  icon: colors.blueGrey[600],
  background: {
    default: '#E8E7E4',
    paper: white,
  },
  divider: colors.grey[200],
};
