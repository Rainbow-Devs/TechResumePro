import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import { store } from './store'; // Ensure this is the correct path to your store
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap App with Provider */}
      <App />
    </Provider>
  </React.StrictMode>,
);
