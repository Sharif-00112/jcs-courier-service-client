import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// REACT_APP_FIREBASE_API_KEY=AIzaSyA1YVn3TEbMNo9J58wyeKsuRuuRnKN4030
// REACT_APP_FIREBASE_AUTH_DOMAIN=jcs-courier-service.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=jcs-courier-service
// REACT_APP_FIREBASE_STORAGE_BUCKET=jcs-courier-service.appspot.com
// REACT_APP_FIREBASE_MESSAGING_SENDER_ID=540043740870
// REACT_APP_FIREBASE_APP_ID=1:540043740870:web:e01b44dfda37ce77d3b9c7
// REACT_APP_FIREBASE_MEASUREMENT_ID=G-GT0PH13R0K