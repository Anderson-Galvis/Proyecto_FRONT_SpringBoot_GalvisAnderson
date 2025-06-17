// src/main.jsx (Versión Final con Layout)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Layouts
import SharedLayout from './components/SharedLayout.jsx'; // <-- 1. IMPORTA EL LAYOUT

// Páginas públicas
import HomePage from './pages/HomePage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';

// Páginas protegidas
import DashboardPage from './pages/DashboardPage.jsx';
import InventarioPage from './pages/InventarioPage.jsx';
import LoteDetallePage from './pages/LoteDetallePage.jsx';
import ProtectedRoute from './auth/ProtectedRoute.jsx';

import './index.css';

const router = createBrowserRouter([
  // RUTAS PÚBLICAS
  { path: '/', element: <HomePage /> },
  { path: '/register', element: <RegisterPage /> },

  // RUTAS PROTEGIDAS (ESTA ES LA NUEVA ESTRUCTURA)
  {
    element: <ProtectedRoute />, // 1. Primero verifica si está logueado
    children: [
      {
        element: <SharedLayout />, // 2. Si está logueado, muestra el layout con la Navbar
        children: [
          // 3. Dentro del layout, muestra la página correspondiente
          { path: '/dashboard', element: <DashboardPage /> },
          { path: '/inventario', element: <InventarioPage /> },
          { path: '/inventario/:id', element: <LoteDetallePage /> },
          // { path: '/pedidos', element: <PedidosPage /> }, // <-- Aquí irían las demás rutas protegidas
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