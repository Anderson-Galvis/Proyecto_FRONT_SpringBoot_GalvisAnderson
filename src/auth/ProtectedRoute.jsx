// src/auth/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // 1. Revisamos si hay un "pase de acceso" (el token) guardado.
  const token = localStorage.getItem('authToken');

  // 2. Si NO hay token...
  if (!token) {
    // ...el guardia no te deja pasar y te redirige al login.
    return <Navigate to="/" />;
  }

  // 3. Si SÍ hay token, el guardia te deja pasar a la ruta que querías ver.
  // <Outlet /> es el lugar donde se mostrará el Dashboard (o cualquier otra página protegida).
  return <Outlet />;
};

export default ProtectedRoute;