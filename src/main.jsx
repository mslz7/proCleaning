import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import './assets/css/fonts.css';
import './assets/css/style.css';
import './assets/css/tailwind.css';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
