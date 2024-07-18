import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.tsx';
import './index.css';
import { NextUIProvider } from '@nextui-org/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <div className="h-[100vh] dark text-foreground bg-background">
        <App />
      </div>
    </NextUIProvider>
  </React.StrictMode>
);
