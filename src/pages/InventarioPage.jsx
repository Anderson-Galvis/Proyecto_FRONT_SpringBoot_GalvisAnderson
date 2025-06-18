import React, { useState, useEffect } from 'react'; // <-- 1. IMPORTAMOS useState y useEffect
import { Link } from 'react-router-dom';
import { getLotes } from '../api/apiService'; // <-- 2. IMPORTAMOS NUESTRA FUNCIÓN DE API
import './InventarioPage.css';

const InventarioPage = () => {
  // 3. DEFINIMOS LOS ESTADOS DEL COMPONENTE
  const [lotes, setLotes] = useState([]); // Para almacenar los lotes de la API
  const [isLoading, setIsLoading] = useState(true); // Para mostrar un mensaje de "Cargando..."
  const [error, setError] = useState(null); // Para mostrar cualquier error que ocurra

  // 4. USAMOS useEffect PARA LLAMAR A LA API CUANDO EL COMPONENTE SE MONTA
  useEffect(() => {
    const fetchLotes = async () => {
      try {
        const data = await getLotes(); // Llamamos a la función del servicio
        setLotes(data); // Guardamos los datos recibidos en nuestro estado
      } catch (err) {
        setError(err.message); // Si hay un error, lo guardamos en el estado de error
      } finally {
        setIsLoading(false); // La carga ha terminado (sea con éxito o con error)
      }
    };

    fetchLotes(); // Ejecutamos la función
  }, []); // El array vacío `[]` asegura que esto se ejecute solo UNA VEZ

  // 5. RENDERIZADO CONDICIONAL BASADO EN LOS ESTADOS
  if (isLoading) {
    return <div className="inventario-container"><p>Cargando inventario...</p></div>;
  }

  if (error) {
    return <div className="inventario-container"><p style={{ color: 'red' }}>Error: {error}</p></div>;
  }

  return (
    <div className="inventario-container">
      <h1>Gestión de Inventario</h1>
      <h2>Listado de Lotes</h2>

      <table className="lotes-table">
        <thead>
          <tr>
            <th>Código de Lote</th>
            <th>Fecha Producción</th>
            <th>Tipo Producto</th>
            <th>Cantidad</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/* Si no hay lotes, mostramos un mensaje amigable */}
          {lotes.length === 0 ? (
            <tr>
              <td colSpan="6">No hay lotes registrados en el inventario.</td>
            </tr>
          ) : (
            // Mapeamos sobre el estado 'lotes' que viene de la API
            lotes.map((lote) => (
              <tr key={lote.id}>
                <td>{lote.codigoLote}</td>
                <td>{lote.fechaProduccion}</td>
                <td>{lote.tipoProducto}</td>
                <td>{lote.cantidad}</td>
                <td>{lote.estado}</td>
                <td>
                  <Link to={`/inventario/${lote.id}`} className="btn-details">
                    Ver Detalles
                  </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InventarioPage;