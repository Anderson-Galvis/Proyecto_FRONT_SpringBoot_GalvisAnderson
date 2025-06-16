// src/components/LoginForm.jsx (Versión Completa y Actualizada)
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // 1. Añadimos Link a la importación
import './LoginForm.css';

function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 
    
    console.log('Datos enviados (simulando login):', { email, password }); 
    
    const fakeToken = 'un-token-secreto-y-falso-para-la-sesion';
    localStorage.setItem('authToken', fakeToken);
    
    navigate('/dashboard'); 
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Atunes del Pacífico</h2>
        <h3>Iniciar Sesión</h3>
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
            placeholder="********" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Ingresar</button>

        {/* --- 2. CÓDIGO AÑADIDO AQUÍ --- */}
        <p style={{ textAlign: 'center', marginTop: '1rem' }}>
          ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
        </p>
        {/* --- FIN DEL CÓDIGO AÑADIDO --- */}

      </form>
    </div>
  );
}

export default LoginForm;