import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer } from './reducers';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(reducer, applyMiddleware(thunk, logger))

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <>
      <ToastContainer/>
        <App />
      </>
    </BrowserRouter>
  </Provider>
);
