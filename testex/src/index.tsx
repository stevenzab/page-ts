import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Footer from './components/footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
