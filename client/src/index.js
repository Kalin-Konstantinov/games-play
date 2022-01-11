import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

let Start = () => {
  return (
    <Router>
      <App />
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Start />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
