import "@fontsource/montserrat";
import "@fontsource/roboto";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import globalColors from "./styles/globalColors";
import globalFonts from "./styles/globalFonts";
import GlobalStyled from "./styles/GlobalStyled";
import globalSizes from "./styles/globalSizes";

const documentRoot = document.getElementById("root") as HTMLElement;
const root = createRoot(documentRoot);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider
        theme={{
          globalColors,
          globalFonts,
          globalSizes,
        }}
      >
        <GlobalStyled />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
