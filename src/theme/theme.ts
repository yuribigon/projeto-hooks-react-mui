import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette:{
      secondary: {main: "#f44336"},
      primary: {main: "#009688"},
    },
    breakpoints:{
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      }
    }
  });