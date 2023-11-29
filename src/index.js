//imporeer react
import React from 'react';
//imporeer reactDOM
import ReactDOM from 'react-dom/client';
//imporeer app component
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

