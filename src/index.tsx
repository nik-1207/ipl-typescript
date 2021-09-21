import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CustomLoader from './components/CustomLoader';
import ErrorBoundry from './ErrorBoundry/ErrorBoundry';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundry>
    <App />
    <CustomLoader />
    </ErrorBoundry>

  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
