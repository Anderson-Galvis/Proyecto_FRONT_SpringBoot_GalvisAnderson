// src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Usaremos los mismos estilos del LoginForm para mantener consistencia
import '../components/LoginForm.css';

function RegisterPage() {
  const navigate = useNavigate();
  
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const nuevoUsuario = { nombre, email, password };
    
    console.log('Simulando registro de nuevo usuario:', nuevoUsuario);

    // En el futuro, aquí irá la llamada `fetch` a `POST /auth/register`
    // Si el registro es exitoso, el backend nos dirá qué hacer.
    // Lo normal es redirigir al usuario al login para que inicie sesión por primera vez.
    alert('¡Registro exitoso! Ahora serás redirigido al login.');
    navigate('/');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Atunes del Pacífico</h2>
        <h3>Crear Cuenta</h3>
        
        <div className="form-group">
          <label htmlFor="nombre">Nombre Completo</label>
          <input
            type="text"
            id="nombre"
            placeholder="Juan Pérez"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="tu@email.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Mínimo 8 caracteres"
            required
            minLength="8"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <button type="submit">Registrarse</button>

        <p style={{ textAlign: 'center', marginTop: '1rem' }}>
          ¿Ya tienes cuenta? <Link to="/">Inicia sesión aquí</Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterPage;