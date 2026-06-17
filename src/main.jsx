import React from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/saira/400.css';
import '@fontsource/saira/500.css';
import App from './App.jsx';
import './App.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
