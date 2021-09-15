import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Cards from './components/Cards';
import Border from './components/Border';
import Geolocation from './components/Geolocation'

ReactDOM.render(
  <React.StrictMode>
    <App />
<br/>
    <Cards />
    <br />
    <Border />

    <Geolocation/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
