//packages
import React from 'react';
import ReactDOM from 'react-dom/client';

// @styles
import './styles.css';

// @scripts
import { JournalApp } from './JournalApp';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <JournalApp />
    </BrowserRouter>
  </React.StrictMode>
);
