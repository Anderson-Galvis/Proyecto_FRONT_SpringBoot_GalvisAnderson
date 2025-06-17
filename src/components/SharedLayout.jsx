import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; // Importamos la Navbar que ya tienes

const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        {/* El componente <Outlet> renderizará aquí la página hija (Dashboard, Inventario, etc.) */}
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;