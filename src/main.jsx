import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';          // ← Tailwind ve global CSS
import App from './App';       // ← Bileşen dosyanız

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
