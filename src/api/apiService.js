// src/api/apiService.js

const API_BASE_URL = 'http://192.168.20.82:8080/api/v1';

// --- Helper para obtener el token y crear los encabezados ---
const getAuthHeaders = () => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    // En un futuro, podríamos redirigir al login si no hay token
    console.error('No se encontró token de autenticación');
    return {};
  }
  return {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
};

// --- Función de Login (ya la tienes) ---
export const loginUser = async (credentials) => { /* ... tu código existente ... */ };

// --- Función para obtener TODOS los lotes ---
export const getLotes = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/lotes`, { // Endpoint basado en LoteController
      method: 'GET',
      headers: getAuthHeaders(), // <-- ¡Usamos el token!
    });
    if (!response.ok) throw new Error('Error al obtener los lotes');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// --- Función para obtener TODOS los clientes ---
export const getClientes = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/clientes`, { // Endpoint basado en ClienteController
      method: 'GET',
      headers: getAuthHeaders(),
    });
    if (!response.ok) throw new Error('Error al obtener los clientes');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// --- Función para crear un nuevo pedido ---
export const crearPedido = async (pedidoData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/pedidos`, { // Endpoint basado en PedidoController
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(pedidoData),
    });
    if (!response.ok) throw new Error('Error al crear el pedido');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// --- Función para obtener UN SOLO lote por su ID ---
export const getLoteById = async (loteId) => {
    try {
      // Asumimos que el endpoint será /lotes/{id}, un patrón REST estándar
      const response = await fetch(`${API_BASE_URL}/lotes/${loteId}`, {
        method: 'GET',
        headers: getAuthHeaders(),
      });
  
      if (!response.ok) {
        throw new Error(`Error al obtener los detalles del lote ${loteId}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    };