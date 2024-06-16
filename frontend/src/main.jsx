import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {SnackbarProvider} from 'notistack'
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <SnackbarProvider>
    <App />
    </SnackbarProvider>
  
  </React.StrictMode>
);
