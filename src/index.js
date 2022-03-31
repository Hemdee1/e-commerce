import react from "react";
import reactDom from "react-dom";
import App from "./app";
import AppProvider from "./context";
import "./index.css";

reactDom.render(
  <react.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </react.StrictMode>,
  document.getElementById("root")
);
