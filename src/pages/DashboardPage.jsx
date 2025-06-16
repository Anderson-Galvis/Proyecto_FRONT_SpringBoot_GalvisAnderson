// src/pages/DashboardPage.jsx
import React from 'react';
import Navbar from '../components/Navbar.jsx';

function DashboardPage() {
  // Un estilo simple para añadir un padding superior y que el contenido no quede oculto detrás del Navbar
  const contentStyle = {
    paddingTop: '80px', // Un poco más que la altura del navbar (60px)
    paddingLeft: '2rem',
    paddingRight: '2rem'
  };

  return (
    <div>
      <Navbar />
      <div style={contentStyle}>
        <h1>¡Bienvenido al Dashboard!</h1>
        <p>Este es el área principal de contenido.</p>
        <p>A partir de aquí, construiremos las vistas para cada rol de usuario.</p>
      </div>
    </div>
  );
}

export default DashboardPage;