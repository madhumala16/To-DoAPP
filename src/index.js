import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { store, persistor } from './reduxStore/store';
import { PersistGate } from "redux-persist/integration/react";
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={"loading"} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

