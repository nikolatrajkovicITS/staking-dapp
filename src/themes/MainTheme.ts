import { createTheme } from "@mui/material/styles";
import colors from "./colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.turquoise,
    },
    secondary: {
      main: colors.green,
    },
    error: {
      main: colors.red,
    },
    background: {
      default: colors.midnightBlue,
      paper: colors.lighterDarkGrey,
    },
    text: {
      primary: colors.white,
      secondary: colors.textColor,
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
      color: colors.titleColor,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      color: colors.titleColor,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 700,
      color: colors.titleColor,
    },
    body1: {
      fontSize: "1rem",
      color: colors.textColor,
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
          backgroundColor: colors.turquoise,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          textTransform: "none",
          fontWeight: 700,
          backgroundColor: colors.turquoise,
          color: colors.white,
          "&:hover": {
            backgroundColor: colors.turquoise,
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
