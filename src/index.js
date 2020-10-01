import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FormikForm from './component/FormikForm';
import RegistrationFormikYup from './component/RegistrationFormikYup';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
