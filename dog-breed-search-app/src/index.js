import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css'; // Import your global styles
import App from './App'; // Import your main App component
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Render your app inside the 'root' div in index.html
);

reportWebVitals();