import { createTheme, CssBaseline } from "@mui/material";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Desafio from "./components/MuiDesafio";
import MuiLayout from "./components/MuiLayout";
import MuiTextField from "./components/MuiTextField";
import MuiHooks from "./hooksmui/MuiHooks";
import Home from "./page/Home";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <MuiLayout/> */}
      {/* <MuiTextField/> */}
      {/* <Desafio/> */}
      {/* <MuiHooks/> */}
      <Home/>
    </ThemeProvider>
  );
}

export default App;
