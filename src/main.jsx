import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BackProvider } from './context/BackContext.jsx';
import './index.css'

import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BackProvider>
        <App />
      </BackProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
