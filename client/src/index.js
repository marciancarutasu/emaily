import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import reducers from './reducers';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import App from './components/App';

const root = createRoot(document.getElementById('root'));
const store = configureStore({ reducer: reducers, middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
}, applyMiddleware(thunk));

root.render(
    <Provider store={ store }><App /></Provider>
);

console.log('STRIPE KEY IS', process.env.REACT_APP_STRIPE_KEY);
console.log('Enviroment is', process.env.NODE_ENV);
