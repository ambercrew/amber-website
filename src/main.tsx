import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";
import "./global.css";
import { Root } from "./Root";

const container = document.getElementById("root")!;
const app = (
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

// Production builds ship prerendered HTML (see scripts/prerender.js), so
// hydrate it; the dev server serves an empty root and renders from scratch.
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}
