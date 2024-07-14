import { createTheme } from '@mui/material';

const gutter = '1em';

const black = '#000';
const midnightBlue = 'rgb(38,47,56)';

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
          background: `linear-gradient(${black}, ${midnightBlue})`,
          borderBottom: `ridge 1px ${black}`,
        },
        main: {
          padding: `${gutter}`,
        },
        nav: {
          background: `linear-gradient(${midnightBlue}, ${black})`,
          padding: `${gutter}`,
          borderRight: `ridge 1px ${black}`,
        },
        footer: {
          background: `linear-gradient(to left, ${midnightBlue}, ${black})`,
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
