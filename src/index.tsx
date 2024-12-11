import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';
import './styles.scss';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root') as Element).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
