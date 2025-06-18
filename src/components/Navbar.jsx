import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú hamburguesa

  const handleLogout = () => {
    setIsOpen(false); // Cierra el menú si está abierto
    navigate('/');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <nav className="navbar">
      <Link to="/dashboard" className="navbar-brand" onClick={closeMenu}>
        Atunes del Pacífico
      </Link>
      
      {/* Botón de Hamburguesa (solo visible en móvil) */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Enlaces de Navegación */}
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/dashboard" onClick={closeMenu}>Inicio</Link>
        <Link to="/inventario" onClick={closeMenu}>Inventario</Link>
        <Link to="/nuevo-pedido" onClick={closeMenu}>Nuevo Pedido</Link>
        <Link to="/mis-pedidos" onClick={closeMenu}>Historial de Pedidos</Link>
        {/* El botón de logout ahora es parte de los links para que se oculte en móvil */}
        <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
      </div>
    </nav>
  );
  
}
export default Navbar;