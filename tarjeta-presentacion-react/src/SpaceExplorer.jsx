import React, { useState, useEffect, useMemo } from 'react';

    function SpaceExplorer() {
    // --- ESTADOS ---
    const [distance, setDistance] = useState(0); // Distancia recorrida
    const [fuel, setFuel] = useState(500); // Combustible inicial
    const [planetsVisited, setPlanetsVisited] = useState(0); // Planetas visitados

    // --- HOOKS DE CICLO DE VIDA ---

    // 1. EFECTO DE MONTAJE Y DESMONTAJE
    // Este useEffect se ejecuta UNA SOLA VEZ cuando el componente se monta en el DOM,
    // porque su arreglo de dependencias está vacío `[]`.
    useEffect(() => {
        console.log('🚀 ¡Panel de control MONTADO! Iniciando simulación de vuelo...');

        // Simulamos el vuelo con un intervalo que se ejecuta cada segundo.
        const flightInterval = setInterval(() => {
        // Usamos la forma funcional de setState para asegurar que tenemos el valor más reciente.
        setDistance(prevDistance => prevDistance + 100);
        setFuel(prevFuel => prevFuel - 5);
        }, 1000);

        // FUNCIÓN DE LIMPIEZA (Cleanup): Se ejecuta cuando el componente se DESMONTA.
        // Es CRÍTICO para detener intervalos, suscripciones, etc., y evitar fugas de memoria.
        return () => {
        console.log('🔥 ¡Panel de control DESMONTADO! Deteniendo la simulación.');
        clearInterval(flightInterval);
        };
    }, []); // El `[]` vacío es la clave para que se comporte como Montaje/Desmontaje.

    // 2. EFECTO DE ACTUALIZACIÓN
    // Este useEffect se ejecuta cada vez que los valores en su arreglo de dependencias cambian.
    // En este caso, cada vez que `distance` o `fuel` se actualizan.
    useEffect(() => {
        console.log(`🛰️  Panel ACTUALIZADO: Distancia=${distance}, Combustible=${fuel}`);

        // Si pasamos por un nuevo "punto de control" cada 1000 unidades, visitamos un planeta.
        if (distance > 0 && distance % 1000 === 0) {
        setPlanetsVisited(prevPlanets => prevPlanets + 1);
        }
        
        // Si nos quedamos sin combustible, detenemos la actualización de estado.
        if (fuel <= 0) {
            setFuel(0); // Asegurarnos que no sea negativo
            // En una app real, aquí se detendría el intervalo, pero lo dejamos así para ver el desmontaje.
        }

    }, [distance, fuel]); // Se ejecuta si `distance` o `fuel` cambian.

    // --- HOOK DE OPTIMIZACIÓN ---
    // `useMemo` para calcular un valor derivado de forma optimizada.
    const shipStatus = useMemo(() => {
        console.log('🤔  Calculando estado de la nave...');
        if (fuel > 200) return 'Operacional';
        if (fuel > 50) return 'Combustible bajo';
        return '¡Alerta! Nivel de combustible crítico';
    }, [fuel]); // Solo se recalcula si `fuel` cambia.

    // Estilos del panel
    const panelStyle = {
        fontFamily: 'monospace',
        border: '2px solid cyan',
        borderRadius: '10px',
        padding: '25px',
        maxWidth: '600px',
        margin: '30px auto',
        boxShadow: '0 0 15px cyan',
        backgroundColor: '#0a0a23',
        color: '#00ff00',
    };

    return (
        <div style={panelStyle}>
        <h2>Panel del Explorador Espacial</h2>
        <p>Distancia Recorrida: {distance} km</p>
        <p>Combustible Restante: {fuel} L</p>
        <p>Planetas Visitados: {planetsVisited}</p>
        <p>Estado de la Nave: <span style={{color: fuel <= 50 ? 'red' : 'lime'}}>{shipStatus}</span></p>
        </div>
    );
}

export default SpaceExplorer;