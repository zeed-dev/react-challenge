import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import OnBoardingPage from './Container/On Boarding/OnBoardingPage';
// import Login from './Container/Login/Login';
import Regsiter from './Container/Register/Regsiter';

ReactDOM.render(
  <React.StrictMode>
    <Regsiter />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
