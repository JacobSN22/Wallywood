import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './Component/Style/Theme'
import { BrowserRouter } from 'react-router-dom';
import { PosterProvider } from './Component/App/PosterList/posterList';
import { AuthProvider } from './Component/Providers/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PosterProvider>
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider theme={theme} >
            <App />
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    </PosterProvider>
  </React.StrictMode>
);
