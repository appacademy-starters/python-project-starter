import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
// import { fetchAllUsers } from './util/users_util';
import { Provider } from 'react-redux';
import configureStore from './store/store';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store } >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
