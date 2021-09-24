import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ErrorBoundry from "./ErrorBoundry/ErrorBoundry";
import CustomLoader from "./components/CustomLoader";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundry>
      <App />
      <CustomLoader />
    </ErrorBoundry>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
