import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "@fontsource/roboto";
import "@fontsource/montserrat";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
