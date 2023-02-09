import "./App.css";
import Footer from "./Layout/Footer";
import Navbar from "./Layout/Navbar";

import RoutesScreen from "./Routes";
import { BrowserRouter } from "react-router-dom";

import { Container } from "@mui/material";
import theme from "./Theme/index";
import { ThemeProvider } from "@mui/material";


import { UserContext } from "./Context/UserContext";

function App() {

  return (
    <UserContext.Provider value={''}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Container maxWidth={"xl"}>
            <Navbar />
            <RoutesScreen />
            <Footer />
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
