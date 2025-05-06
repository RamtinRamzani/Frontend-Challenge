import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/styles/index.css";
import App from "./App.tsx";
import { Provider as ReduxProvide } from "react-redux";
import { store } from "./stores/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvide store={store}>
      <App />
    </ReduxProvide>
  </StrictMode>
);
