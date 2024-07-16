import { createTheme } from '@mui/material';

const gutter = '1em';

const black = '#000'
const white = '#FFFF'
const grey = '#818d92';
const feldgrau = '#586A6A';
const khaki = '#B9A394';
// $silver: #D4C5C7;
const lavendar = '#DAD4EF';

const paperFadeColor1 = 'rgba(60, 60, 60, .9)';
const paperFadeColor2 = 'rgba(60, 60, 60, .7)';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        header: {
          background: `linear-gradient(${lavendar}, ${white})`,
          borderBottom: `ridge 1px ${black}`,
          color: `${black}`
        },
        main: {
          padding: `${gutter}`,
        },
        nav: {
          background: `linear-gradient(${feldgrau}, ${white})`,
          padding: `${gutter}`,
          borderRight: `ridge 1px ${black}`,
        },
        footer: {
          background: `linear-gradient(to left, ${feldgrau}, ${white})`,
          textAlign: 'right',
          padding: `0 ${gutter}`,
          borderTop: `ridge 1px ${black}`,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: `${gutter}`,
          background: `linear-gradient(${paperFadeColor1}, ${paperFadeColor2})`,
          border: `ridge 2px ${black}`,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          whiteSpace: 'nowrap',
        },
      },
    },
  },
});

export default theme;
