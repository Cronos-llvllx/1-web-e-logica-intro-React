import React, { useState } from 'react';
import FeedbackMessage from './FeedbackMessage';
import GuessForm from './GuessForm';

    // Función para generar un número aleatorio entre 1 y 100
    const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

    function GuessTheNumberGame() {
    // --- ESTADOS DEL JUEGO ---
    const [secretNumber, setSecretNumber] = useState(generateRandomNumber());
    const [userGuess, setUserGuess] = useState('');
    const [feedback, setFeedback] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [attempts, setAttempts] = useState(0);

    // --- MANEJADORES DE LÓGICA ---
    const handleGuessSubmit = (e) => {
        e.preventDefault();
        if (!userGuess) return;

        const guessAsNumber = parseInt(userGuess, 10);
        setAttempts(attempts + 1);

        if (guessAsNumber === secretNumber) {
        setFeedback(`¡Felicidades! Adivinaste el número en ${attempts + 1} intentos.`);
        setIsCorrect(true);
        } else if (guessAsNumber < secretNumber) {
        setFeedback('¡Muy bajo! Intenta con un número más alto.');
        setIsCorrect(false);
        } else {
        setFeedback('¡Muy alto! Intenta con un número más bajo.');
        setIsCorrect(false);
        }
        setUserGuess(''); // Limpiar el input después de cada intento
    };
    
    const handleResetGame = () => {
        setSecretNumber(generateRandomNumber());
        setUserGuess('');
        setFeedback('');
        setIsCorrect(false);
        setAttempts(0);
    };

    // Estilo del contenedor del juego
    const gameStyle = {
        fontFamily: 'sans-serif',
        border: '2px solid #6c757d',
        borderRadius: '10px',
        padding: '25px',
        maxWidth: '500px',
        margin: '30px auto',
        boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
        backgroundColor: '#f8f9fa',
        color: '#333',
    };

    return (
        <div style={gameStyle}>
        <h2>Adivina el Número (1-100)</h2>
        
        {/* --- COMPOSICIÓN Y RENDERIZADO CONDICIONAL EN ACCIÓN --- */}

        {/* 1. Composición: Usamos el componente GuessForm. */}
        {/* 2. Condicional: Se muestra solo si el juego NO ha terminado (`!isCorrect`). */}
        {!isCorrect && (
            <GuessForm 
            guess={userGuess}
            onGuessChange={(e) => setUserGuess(e.target.value)}
            onSubmit={handleGuessSubmit}
            />
        )}
        
        {/* 1. Composición: Usamos el componente FeedbackMessage. */}
        {/* 2. Condicional: Se muestra solo cuando hay un mensaje de feedback. */}
        <FeedbackMessage message={feedback} isSuccess={isCorrect} />

        {/* Condicional: Mostramos el botón de reinicio solo si se adivinó el número. */}
        {isCorrect && (
            <button onClick={handleResetGame} style={{ padding: '10px 20px', fontSize: '16px', marginTop: '10px' }}>
            Jugar de Nuevo
            </button>
        )}
        </div>
    );
    }

export default GuessTheNumberGame;