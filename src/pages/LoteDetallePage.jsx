import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getLoteById } from '../api/apiService'; // <-- IMPORTAMOS LA NUEVA FUNCIÓN
import './LoteDetallePage.css';

const LoteDetallePage = () => {
  const { id } = useParams(); // Obtenemos el ID de la URL

  // Estados para manejar los datos, la carga y los errores
  const [lote, setLote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLoteDetalle = async () => {
      // Verificamos que tengamos un id antes de llamar a la API
      if (!id) {
        setIsLoading(false);
        setError('No se proporcionó un ID de lote.');
        return;
      }

      try {
        const data = await getLoteById(id); // Llamamos a la API con el id
        setLote(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLoteDetalle();
  }, [id]); // El efecto se volverá a ejecutar si el 'id' de la URL cambia

  // Renderizado condicional
  if (isLoading) {
    return <div className="detalle-container"><p>Cargando detalles del lote...</p></div>;
  }

  if (error) {
    return <div className="detalle-container"><p style={{ color: 'red' }}>Error: {error}</p></div>;
  }

  if (!lote) {
    return <div className="detalle-container"><p>No se encontraron datos para este lote.</p></div>;
  }

  // Si todo va bien, mostramos los detalles del lote
  return (
    <div className="detalle-container">
      <h1>Detalle del Lote: {lote.codigoLote}</h1>
      <ul>
        <li><strong>ID:</strong> {lote.id}</li>
        <li><strong>Código de Lote:</strong> {lote.codigoLote}</li>
        <li><strong>Fecha de Producción:</strong> {lote.fechaProduccion}</li>
        <li><strong>Tipo de Producto:</strong> {lote.tipoProducto}</li>
        <li><strong>Cantidad:</strong> {lote.cantidad}</li>
        <li><strong>Estado:</strong> {lote.estado}</li>
      </ul>
      <Link to="/inventario">Volver al Inventario</Link>
    </div>
  );
};

export default LoteDetallePage;