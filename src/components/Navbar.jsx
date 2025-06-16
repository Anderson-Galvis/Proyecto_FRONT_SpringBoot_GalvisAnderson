// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // En el futuro, aquí borraremos el token de autenticación.
    // Por ahora, solo redirigimos a la página de login.
    console.log('Cerrando sesión...');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <Link to="/dashboard" className="navbar-brand">Atunes del Pacífico</Link>
      <div className="navbar-links">
        {/* Aquí añadiremos más enlaces después (ej: Pedidos, Inventario) */}
        <Link to="/dashboard">Inicio</Link>
        <Link to="/pedidos">Mis Pedidos</Link> 
      </div>
      <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
    </nav>
  );
}

export default Navbar;