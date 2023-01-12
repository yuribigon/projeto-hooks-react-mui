import { createTheme, CssBaseline } from "@mui/material";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Home from "./page/Home";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home/>
    </ThemeProvider>
  );
}

export default App;
