import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import App from './App';
import { ThemeProvider } from '@emotion/react';
import { theme } from './Config/MuiTheme';
=======
import App from './App'; 
>>>>>>> ff2110390efcbcf0c1f8ed78edf14e6074a91dbb

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
