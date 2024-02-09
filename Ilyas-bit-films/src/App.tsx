import "./App.css";

import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { HeaderContainer } from "./containers/header-container";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <HeaderContainer></HeaderContainer>
      <Outlet />
    </ThemeProvider>
  );
}
