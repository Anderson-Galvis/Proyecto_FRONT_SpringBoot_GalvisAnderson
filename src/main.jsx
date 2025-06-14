// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import DashboarPage from './pages/DashboarPage.jsx';
import './index.css';

// Aquí definimos nuestras rutas
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    // Aquí podríamos poner una página de error en el futuro
  },
  {
    path: '/dashboard',
    element: <DashboarPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* En lugar de renderizar <App />, ahora proveemos nuestro router */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
