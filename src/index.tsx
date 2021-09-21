import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CustomLoader from './components/CustomLoader';
import Loader from 'react-loader-spinner';

ReactDOM.render(
  <React.StrictMode>
 <App />
    <CustomLoader />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
