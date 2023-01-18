import "@fontsource/montserrat";
import "@fontsource/roboto";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";

const documentRoot = document.getElementById("root") as HTMLElement;
const root = createRoot(documentRoot);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
