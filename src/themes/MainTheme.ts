import { createTheme } from "@mui/material/styles";
import colors from "./colors";

const theme = createTheme({
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
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.2,
      color: colors.titleColor,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.3,
      color: colors.titleColor,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: 1.4,
      color: colors.titleColor,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 700,
      lineHeight: 1.5,
      color: colors.titleColor,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 700,
      lineHeight: 1.5,
      color: colors.titleColor,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 700,
      lineHeight: 1.6,
      color: colors.titleColor,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
      color: colors.textColor,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.5,
      color: colors.grey,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.75,
      color: colors.textColor,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.75,
      color: colors.grey,
    },
    button: {
      fontSize: "1rem",
      fontWeight: 700,
      textTransform: "none",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.66,
      color: colors.grey,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 400,
      textTransform: "uppercase",
      lineHeight: 2.66,
      color: colors.grey,
    },
  },
});

export default theme;
