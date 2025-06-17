import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './LoteDetallePage.css'; // Crearemos este archivo para estilos

const LoteDetallePage = () => {
  // Usamos useParams para obtener el 'id' de la URL (ej: /inventario/1 -> id será '1')
  const { id } = useParams();

  // En un futuro, aquí haríamos una llamada a la API con este id.
  // Por ahora, usamos los mismos datos falsos de la página de inventario.
  const mockLotes = [
    { id: 1, codigoLote: 'ATL-2024-001', fechaProduccion: '2024-05-20', tipoProducto: 'ACEITE', cantidad: 500, estado: 'DISPONIBLE' },
    { id: 2, codigoLote: 'ATL-2024-002', fechaProduccion: '2024-05-21', tipoProducto: 'AGUA', cantidad: 300, estado: 'DISPONIBLE' },
    { id: 3, codigoLote: 'ATL-2024-003', fechaProduccion: '2024-05-18', tipoProducto: 'SALSA', cantidad: 150, estado: 'VENDIDO' },
    { id: 4, codigoLote: 'ATL-2024-004', fechaProduccion: '2024-05-19', tipoProducto: 'ACEITE', cantidad: 200, estado: 'DEFECTUOSO' },
  ];

  // Buscamos el lote específico. ¡Ojo! useParams devuelve strings, así que comparamos con == o convertimos a número.
  const lote = mockLotes.find(lote => lote.id == id);

  if (!lote) {
    return <h2>Lote no encontrado</h2>;
  }

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