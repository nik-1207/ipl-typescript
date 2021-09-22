import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ErrorBoundry from "./ErrorBoundry/ErrorBoundry";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundry>
      <App />
    </ErrorBoundry>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
