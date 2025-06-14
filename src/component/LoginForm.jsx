import React, { useState } from 'react'; // 1. Importamos 'useState' desde React
import './LoginForm.css';

function LoginForm() {
  // 2. Creamos "estados" para guardar el email y la contraseña
  // useState('') significa: "el valor inicial es un texto vacío"
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 4. Esta función se ejecutará cuando se envíe el formulario
  const handleSubmit = (event) => {
    // previene que la página se recargue, que es el comportamiento por defecto
    event.preventDefault(); 
    
    // Por ahora, solo mostraremos los datos en la consola para verificar que funciona
    console.log('Datos enviados:', { email, password }); 
    
    alert('Login intentado! Revisa la consola (F12) para ver los datos.');
  };

  return (
    <div className="login-container">
      {/* 5. Conectamos nuestra función handleSubmit al evento 'onSubmit' del form */}
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Atunes del Pacífico</h2>
        <h3>Iniciar Sesión</h3>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          {/* 3. Conectamos el input al estado 'email' */}
          <input 
            type="email" 
            id="email" 
            placeholder="tu@email.com" 
            required 
            value={email} // El valor del input es lo que esté en nuestro estado 'email'
            onChange={(e) => setEmail(e.target.value)} // Cuando escribes, actualizamos el estado
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          {/* 3. Conectamos el input al estado 'password' */}
          <input 
            type="password" 
            id="password" 
            placeholder="********" 
            required 
            value={password} // El valor del input es lo que esté en nuestro estado 'password'
            onChange={(e) => setPassword(e.target.value)} // Cuando escribes, actualizamos el estado
          />
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default LoginForm;
