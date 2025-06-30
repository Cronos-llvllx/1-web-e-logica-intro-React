import React from 'react';

// Este componente recibe el mensaje y un indicador de si es un mensaje de éxito.
function FeedbackMessage({ message, isSuccess }) {
    if (!message) {
        return null; // No renderizar nada si no hay mensaje.
    }

    // Estilo base del mensaje.
    const style = {
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        fontWeight: 'bold',
        // Estilo condicional: verde para éxito, naranja para pistas.
        backgroundColor: isSuccess ? '#28a745' : '#ffc107',
        color: isSuccess ? 'white' : 'black',
    };

    return <div style={style}>{message}</div>;
}

export default FeedbackMessage;