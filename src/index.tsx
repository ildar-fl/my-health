import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// import { Provider as ReduxProvider } from 'react-redux';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { BrowserRouter } from 'react-router-dom';
// import { store } from './store/store';
