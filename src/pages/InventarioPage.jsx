import React from 'react';
import { Link } from 'react-router-dom'; // <--- 1. IMPORTAR LINK AQUÍ
import './InventarioPage.css';

const InventarioPage = () => {
  // ... tu mockData se mantiene igual ...
  const mockLotes = [
    { id: 1, codigoLote: 'ATL-2024-001', fechaProduccion: '2024-05-20', tipoProducto: 'ACEITE', cantidad: 500, estado: 'DISPONIBLE' },
    { id: 2, codigoLote: 'ATL-2024-002', fechaProduccion: '2024-05-21', tipoProducto: 'AGUA', cantidad: 300, estado: 'DISPONIBLE' },
    { id: 3, codigoLote: 'ATL-2024-003', fechaProduccion: '2024-05-18', tipoProducto: 'SALSA', cantidad: 150, estado: 'VENDIDO' },
    { id: 4, codigoLote: 'ATL-2024-004', fechaProduccion: '2024-05-19', tipoProducto: 'ACEITE', cantidad: 200, estado: 'DEFECTUOSO' },
  ];
  
  return (
    <div className="inventario-container">
      {/* ... */}
      <table className="lotes-table">
        {/* ... thead sigue igual ... */}
        <tbody>
          {mockLotes.map((lote) => (
            <tr key={lote.id}>
              <td>{lote.codigoLote}</td>
              <td>{lote.fechaProduccion}</td>
              <td>{lote.tipoProducto}</td>
              <td>{lote.cantidad}</td>
              <td>{lote.estado}</td>
              <td>
                {/* --- 2. ESTE ES EL CAMBIO PRINCIPAL --- */}
                <Link to={`/inventario/${lote.id}`} className="btn-details">
                  Ver Detalles
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventarioPage;