import { createTheme } from "@mui/material/styles";
import colors from "./colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.deepBlue,
    },
    secondary: {
      main: colors.green,
    },
    error: {
      main: colors.red,
    },
    background: {
      default: colors.darkGrey,
      paper: colors.lighterDarkGrey,
    },
    text: {
      primary: colors.lightGrey,
      secondary: colors.grey,
    },
    info: {
      main: colors.lightBlue,
    },
    success: {
      main: colors.brightGreen,
    },
    warning: {
      main: colors.yellow,
    },
    common: {
      black: colors.black,
      white: colors.white,
    },
    divider: colors.darkerGrey,
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: colors.lightGrey,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      color: colors.lightGrey,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 700,
      color: colors.lightGrey,
    },
    body1: {
      fontSize: "1rem",
      color: colors.lightGrey,
    },
    body2: {
      fontSize: "0.875rem",
      color: colors.grey,
    },
    button: {
      fontSize: "1rem",
      fontWeight: 700,
      textTransform: "none",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.deepBlue,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: 700,
        },
        contained: {
          backgroundColor: colors.green,
          color: colors.white,
        },
        outlined: {
          borderColor: colors.green,
          color: colors.green,
          "&:hover": {
            backgroundColor: colors.green,
            color: colors.white,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: colors.lighterDarkGrey,
          color: colors.lightGrey,
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: colors.lighterDarkGrey,
          color: colors.lightGrey,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: colors.darkerGrey,
        },
      },
    },
  },
});
