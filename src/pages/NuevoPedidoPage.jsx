import React, { useState } from 'react'; // <-- Importamos useState
import './NuevoPedidoPage.css'; // Crearemos este archivo para los estilos

// Datos falsos que simulan los productos disponibles que nos enviaría la API
const productosDisponibles = [
  { id: 1, nombre: 'Lomo de Atún en Aceite', codigoLote: 'ATL-2024-001', precio: 2.50 },
  { id: 2, nombre: 'Lomo de Atún en Agua', codigoLote: 'ATL-2024-002', precio: 2.25 },
  { id: 5, nombre: 'Sardinas en Tomate', codigoLote: 'SAR-2024-005', precio: 1.75 },
];

const NuevoPedidoPage = () => {
  // 'useState' para manejar el estado de nuestro carrito.
  // 'carrito' es la lista de productos que el cliente ha añadido.
  // 'setCarrito' es la función que usamos para actualizar esa lista.
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  // Función que se ejecuta cuando el cliente hace clic en "Añadir"
  const handleAnadirAlCarrito = (producto) => {
    // Añadimos el nuevo producto a la lista existente en el carrito
    const nuevoCarrito = [...carrito, producto];
    setCarrito(nuevoCarrito);

    // Actualizamos el precio total
    const nuevoTotal = nuevoCarrito.reduce((sum, item) => sum + item.precio, 0);
    setTotal(nuevoTotal);
  };

  const handleRealizarPedido = () => {
    // En el futuro, aquí se enviaría el 'carrito' a la API
    alert(`Pedido realizado con éxito por un total de $${total.toFixed(2)}!`);
    console.log('Pedido a enviar:', carrito);
    // Limpiamos el carrito después de enviar
    setCarrito([]);
    setTotal(0);
  };

  return (
    <div className="nuevo-pedido-container">
      <h1>Crear Nuevo Pedido</h1>
      <div className="columnas">
        <div className="columna-productos">
          <h2>Productos Disponibles</h2>
          <ul>
            {productosDisponibles.map(producto => (
              <li key={producto.id}>
                {producto.nombre} - ${producto.precio.toFixed(2)}
                <button onClick={() => handleAnadirAlCarrito(producto)}>Añadir</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="columna-carrito">
          <h2>Mi Pedido</h2>
          <ul>
            {carrito.map((item, index) => (
              <li key={index}>{item.nombre} - ${item.precio.toFixed(2)}</li>
            ))}
          </ul>
          <hr />
          <p><strong>Total: ${total.toFixed(2)}</strong></p>
          <button onClick={handleRealizarPedido} disabled={carrito.length === 0}>
            Realizar Pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default NuevoPedidoPage;