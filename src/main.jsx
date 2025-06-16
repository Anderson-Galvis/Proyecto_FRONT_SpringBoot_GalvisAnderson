// src/main.jsx (Versión Completa y Actualizada)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Páginas públicas
import HomePage from './pages/HomePage.jsx';
import RegisterPage from './pages/RegisterPage.jsx'; // 1. IMPORTADO AQUÍ

// Rutas protegidas
import DashboardPage from './pages/DashboardPage.jsx';
import ProtectedRoute from './auth/ProtectedRoute.jsx';

import './index.css';

const router = createBrowserRouter([
  // RUTAS PÚBLICAS
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/register', // 2. AÑADIDO AQUÍ
    element: <RegisterPage />,
  },

  // RUTAS PROTEGIDAS
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/dashboard',
        element: <DashboardPage />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);