import React from 'react';

// Recibe props del componente padre para funcionar.
    function GuessForm({ guess, onGuessChange, onSubmit }) {
    return (
        <form onSubmit={onSubmit} style={{ margin: '20px 0' }}>
        <input
            type="number"
            value={guess}
            onChange={onGuessChange}
            placeholder="Ingresa un número"
            style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>
            Adivinar
        </button>
        </form>
    );
    }

export default GuessForm;