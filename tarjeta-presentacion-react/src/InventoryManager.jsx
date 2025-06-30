import React, { useReducer, useRef, useCallback } from 'react';

        // --- 1. DEFINICIÓN DE ACCIONES ---
        // Definir acciones como constantes ayuda a prevenir errores de tipeo.
        const ACTIONS = {
        ADD_ITEM: 'add-item',
        REMOVE_ITEM: 'remove-item',
        INCREMENT_STOCK: 'increment-stock',
        DECREMENT_STOCK: 'decrement-stock',
        };

        // --- 2. ESTADO INICIAL ---
        // Este es el estado con el que nuestra aplicación comenzará.
        const initialState = {
        items: [
            { id: 1, name: 'Laptop Pro', stock: 15 },
            { id: 2, name: 'Teclado Mecánico', stock: 30 },
            { id: 3, name: 'Mouse Gamer', stock: 50 },
        ],
        };

        // --- 3. LA FUNCIÓN REDUCER ---
        // Esta función pura recibe el estado actual y una acción, y devuelve el NUEVO estado.
        // Toda la lógica para modificar el inventario vive aquí.
        function inventoryReducer(state, action) {
        switch (action.type) {
            case ACTIONS.ADD_ITEM: { // <-- Abrimos un bloque con una llave
            const newItem = {
                id: Date.now(),
                name: action.payload.name,
                stock: parseInt(action.payload.stock, 10),
            };
            return { ...state, items: [...state.items, newItem] };
            }

            case ACTIONS.REMOVE_ITEM:
            // Filtra la lista para eliminar un item por su ID.
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
            };

            case ACTIONS.INCREMENT_STOCK:
            // Mapea la lista y actualiza el stock del item correcto.
            return {
                ...state,
                items: state.items.map(item =>
                item.id === action.payload.id ? { ...item, stock: item.stock + 1 } : item
                ),
            };

            case ACTIONS.DECREMENT_STOCK:
            // Similar al incremento, pero decrementa.
            return {
                ...state,
                items: state.items.map(item =>
                item.id === action.payload.id && item.stock > 0 ? { ...item, stock: item.stock - 1 } : item
                ),
            };

            default:
            return state; // Si la acción no es reconocida, devuelve el estado sin cambios.
        }
        }
        // --- 4. EL COMPONENTE ---
    function InventoryManager() {
    // Conectamos nuestro reducer al componente. `state` tiene los datos, `dispatch` envía las acciones.
    const [state, dispatch] = useReducer(inventoryReducer, initialState);
    
    // `useRef` para obtener una referencia directa al input del nombre del producto.
    const nameInputRef = useRef(null);

    // --- MANEJADORES DE EVENTOS ---
    const handleAddItem = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const stock = form.stock.value;
        
        // Enviamos una acción 'ADD_ITEM' con los datos del formulario.
        dispatch({ type: ACTIONS.ADD_ITEM, payload: { name, stock } });
        
        form.reset(); // Limpiamos el formulario
        nameInputRef.current.focus(); // Usamos la referencia para hacer focus en el input. ¡Mejor UX!
    };

    // `useCallback` para "memorizar" la función.
    // Esto es útil para optimización, especialmente si esta función se pasara
    // como prop a muchos componentes hijos, evitando que se re-creen en cada render.
    const handleRemoveItem = useCallback((id) => {
        dispatch({ type: ACTIONS.REMOVE_ITEM, payload: { id } });
    }, []); // El `[]` vacío significa que la función nunca cambiará.

    const inventoryStyle = {
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        border: '2px solid #007bff',
        borderRadius: '10px',
        padding: '25px',
        maxWidth: '700px',
        margin: '30px auto',
        boxShadow: '0 4px 12px rgba(0,123,255,0.2)',
        backgroundColor: '#fff',
        color: '#333',
    };

    return (
        <div style={inventoryStyle}>
        <h2>Gestor de Inventario Avanzado 📦</h2>
        
        <form onSubmit={handleAddItem} style={{ marginBottom: '20px' }}>
            <input ref={nameInputRef} name="name" type="text" placeholder="Nombre del producto" required />
            <input name="stock" type="number" placeholder="Stock inicial" required style={{ margin: '0 10px' }}/>
            <button type="submit">Añadir Producto</button>
        </form>
        
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
            <tr>
                <th style={{ borderBottom: '2px solid #007bff', padding: '8px', textAlign: 'left' }}>Producto</th>
                <th style={{ borderBottom: '2px solid #007bff', padding: '8px', textAlign: 'left' }}>Stock</th>
                <th style={{ borderBottom: '2px solid #007bff', padding: '8px', textAlign: 'left' }}>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {state.items.map(item => (
                <tr key={item.id}>
                <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{item.name}</td>
                <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{item.stock}</td>
                <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>
                    <button onClick={() => dispatch({ type: ACTIONS.INCREMENT_STOCK, payload: { id: item.id } })}>+</button>
                    <button onClick={() => dispatch({ type: ACTIONS.DECREMENT_STOCK, payload: { id: item.id } })} style={{ margin: '0 5px' }}>-</button>
                    <button onClick={() => handleRemoveItem(item.id)} style={{backgroundColor: '#dc3545', color: 'white'}}>Eliminar</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
    }

export default InventoryManager;