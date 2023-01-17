import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from './store';
import App from './components/App/App';
import './assets/styles/main.sass';

const store = setupStore();

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
