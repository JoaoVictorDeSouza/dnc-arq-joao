import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import App from './App.jsx';
import { AppProvider } from './contexts/AppContext.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);