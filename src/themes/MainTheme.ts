import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0e76a8", // Deep Blue
    },
    secondary: {
      main: "#00a86b", // Green
    },
    error: {
      main: "#e63946", // Red
    },
    background: {
      default: "#1e1e2f", // Dark Grey
      paper: "#2c2c3a", // Slightly lighter dark grey for cards and surfaces
    },
    text: {
      primary: "#e0e0e0", // Light Grey
      secondary: "#a0a0a0", // Grey
    },
    info: {
      main: "#17a2b8", // Light Blue
    },
    success: {
      main: "#28a745", // Bright Green
    },
    warning: {
      main: "#ffc107", // Yellow
    },
    divider: "#343a40", // Darker grey for dividers
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#e0e0e0",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      color: "#e0e0e0",
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 700,
      color: "#e0e0e0",
    },
    body1: {
      fontSize: "1rem",
      color: "#e0e0e0",
    },
    body2: {
      fontSize: "0.875rem",
      color: "#a0a0a0",
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
          backgroundColor: "#0e76a8",
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
          backgroundColor: "#00a86b",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#008c5e",
          },
        },
        outlined: {
          borderColor: "#00a86b",
          color: "#00a86b",
          "&:hover": {
            backgroundColor: "#00a86b",
            color: "#fff",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#2c2c3a",
          color: "#e0e0e0",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#2c2c3a",
          color: "#e0e0e0",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "#343a40",
        },
      },
    },
  },
});
