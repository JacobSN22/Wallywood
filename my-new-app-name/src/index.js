import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './Component/Style/Theme'
import { BrowserRouter } from 'react-router-dom';
import { PosterProvider } from './Component/App/PosterList/posterList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PosterProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme} >
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </PosterProvider>
  </React.StrictMode>
);
