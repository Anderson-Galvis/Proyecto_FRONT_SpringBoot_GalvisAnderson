// src/main.jsx (Versión Final con Layout)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Layouts
import SharedLayout from './components/SharedLayout.jsx';

// Páginas públicas
import HomePage from './pages/HomePage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';

// Páginas protegidas
import DashboardPage from './pages/DashboardPage.jsx';
import InventarioPage from './pages/InventarioPage.jsx';
import LoteDetallePage from './pages/LoteDetallePage.jsx';
import NuevoPedidoPage from './pages/NuevoPedidoPage.jsx'; // <-- 1. IMPORTA LA NUEVA PÁGINA
import ProtectedRoute from './auth/ProtectedRoute.jsx';

import './index.css';

const router = createBrowserRouter([
  // RUTAS PÚBLICAS
  { path: '/', element: <HomePage /> },
  { path: '/register', element: <RegisterPage /> },

  // RUTAS PROTEGIDAS (ESTA ES LA NUEVA ESTRUCTURA)
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <SharedLayout />,
        children: [
          { path: '/dashboard', element: <DashboardPage /> },
          { path: '/inventario', element: <InventarioPage /> },
          { path: '/inventario/:id', element: <LoteDetallePage /> },
          { path: '/nuevo-pedido', element: <NuevoPedidoPage /> }, // <-- 2. AÑADE LA NUEVA RUTA AQUÍ
        ]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);