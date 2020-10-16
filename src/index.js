import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from "webfontloader";
import './style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import 'https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&display=swap';
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
// import 'font-awesome/css/font-awesome.min.css';

// Should use font-display=swap
WebFont.load({
  google: {
    families: ['UnifrakturMaguntia']
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
