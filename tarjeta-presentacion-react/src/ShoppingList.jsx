    import React, { useState } from 'react';

    function ShoppingList() {
    // --- ESTADOS ---
    // 1. Estado para la lista de productos (un arreglo)
    // Inicializa con algunos productos de ejemplo.
    const [items, setItems] = useState([
        { id: 1, text: 'Manzanas', completed: false },
        { id: 2, text: 'Leche', completed: false },
        { id: 3, text: 'Pan', completed: false },
    ]);

    // 2. Estado para guardar lo que el usuario escribe en el input
    const [inputValue, setInputValue] = useState('');

    // --- MANEJADORES DE EVENTOS ---
    // Función para agregar un nuevo producto a la lista
    const handleAddItem = (e) => {
        // Evita que el formulario recargue la página
        e.preventDefault();
        
        // No agrega nada si el input está vacío
        if (inputValue.trim() === '') return;

        // Crea el nuevo objeto para el producto
        const newItem = {
        id: Date.now(), // ID único basado en la fecha actual
        text: inputValue,
        completed: false,
        };

        // Actualiza el estado de la lista, añadiendo el nuevo producto
        setItems([...items, newItem]);
        
        // Limpia el input después de agregar el producto
        setInputValue('');
    };

    // Función para eliminar un producto de la lista
    const handleRemoveItem = (id) => {
        // Crea una nueva lista filtrando el producto con el ID que queremos borrar
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
    };
    
    // --- ESTILOS (Opcional, para que se vea bien) ---
    const listStyle = {
        fontFamily: 'Arial, sans-serif',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '25px',
        maxWidth: '400px',
        margin: '30px auto',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
    };

    const itemStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        borderBottom: '1px solid #eee',
    };
    
    const removeButtonStyle = {
        backgroundColor: '#ff4d4d',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        padding: '5px 10px',
        cursor: 'pointer',
    };

    // --- JSX: La estructura HTML que se renderiza ---
    return (
        <div style={listStyle}>
        <h2>Mi Lista de Compras 🛒</h2>
        
        {/* Formulario para agregar nuevos productos */}
        <form onSubmit={handleAddItem}>
            <input 
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Añadir un producto..."
            style={{ width: '70%', padding: '8px' }}
            />
            <button type="submit" style={{ width: '25%', padding: '8px', marginLeft: '5%' }}>
            Agregar
            </button>
        </form>
        
        {/* Lista de productos */}
        <ul>
            {items.map(item => (
            <li key={item.id} style={itemStyle}>
                <span>{item.text}</span>
                <span style={{ color: 'black' }}>{item.text}</span>
                <button 
                onClick={() => handleRemoveItem(item.id)}
                style={removeButtonStyle}
                >
                Eliminar
                </button>
            </li>
            ))}
        </ul>
        </div>
    );
    }

    export default ShoppingList;