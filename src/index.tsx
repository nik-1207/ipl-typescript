import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CustomLoader from "./components/CustomLoader";
import ErrorBoundry from "./ErrorBoundry/ErrorBoundry";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

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
