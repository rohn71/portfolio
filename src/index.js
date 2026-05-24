import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const loader = document.getElementById('page-loader');
if (loader) {
  loader.classList.add('hidden');
  loader.addEventListener('transitionend', () => loader.remove(), { once: true });
}