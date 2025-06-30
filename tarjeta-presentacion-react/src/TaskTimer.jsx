    import React, { useState, useEffect, useMemo } from 'react';

    // Componente principal del taller
    function TaskTimer() {
    // --- ESTADOS ---
    // Estado para almacenar la hora actual.
    const [currentTime, setCurrentTime] = useState(new Date());
    // Estado para la lista de tareas.
    const [tasks, setTasks] = useState([
        { name: 'Aprender React', hours: 4 },
        { name: 'Hacer la compra', hours: 1 },
        { name: 'Pasear al perro', hours: 0.5 },
    ]);
    // Estados para el formulario de nueva tarea.
    const [taskName, setTaskName] = useState('');
    const [taskHours, setTaskHours] = useState('');

    // --- HOOK useEffect: PARA EFECTOS SECUNDARIOS ---
    // Este hook se usa para ejecutar código que no está directamente relacionado con el renderizado.
    // En este caso, lo usamos para crear un reloj en tiempo real.
    useEffect(() => {
        // console.log('useEffect se ha ejecutado: Creando el intervalo.');
        
        // Creamos un intervalo que se ejecuta cada 1000 milisegundos (1 segundo).
        const timerId = setInterval(() => {
        setCurrentTime(new Date()); // Actualizamos la hora actual cada segundo.
        }, 1000);

        // FUNCIÓN DE LIMPIEZA: Es crucial para evitar fugas de memoria.
        // Se ejecuta cuando el componente se "desmonta" o desaparece de la pantalla.
        return () => {
        // console.log('Limpiando el intervalo.');
        clearInterval(timerId); // Detenemos el intervalo para que no siga corriendo.
        };
    }, []); // El arreglo vacío `[]` significa que este efecto solo se ejecuta UNA VEZ (cuando el componente aparece).

    // --- HOOK useMemo: PARA OPTIMIZAR CÁLCULOS ---
    // `useMemo` "memoriza" el resultado de un cálculo costoso.
    // Solo volverá a calcular el total si la dependencia (la lista `tasks`) cambia.
    const totalHours = useMemo(() => {
        // console.log('useMemo está calculando el total de horas...');
        // `reduce` es un método de arreglos que suma todos los elementos.
        return tasks.reduce((total, task) => total + parseFloat(task.hours), 0);
    }, [tasks]); // La dependencia `[tasks]` le dice a useMemo: "Solo recalculate si `tasks` cambia".

    // --- MANEJADORES DE EVENTOS ---
    const handleAddTask = (e) => {
        e.preventDefault();
        if (taskName.trim() === '' || taskHours.trim() === '') return;

        const newTask = {
        name: taskName,
        hours: parseFloat(taskHours), // Convertimos las horas a número
        };
        
        // Al actualizar `tasks`, `useMemo` se ejecutará de nuevo.
        setTasks([...tasks, newTask]);

        // Limpiamos los inputs del formulario
        setTaskName('');
        setTaskHours('');
    };
    
    // Estilos para el componente
    const timerStyle = {
        fontFamily: 'Arial, sans-serif',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '25px',
        maxWidth: '500px',
        margin: '30px auto',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        backgroundColor: '#f0f8ff',
        color: '#333'
    };

    return (
        <div style={timerStyle}>
        <h2>Contador de Tareas y Tiempo ⏱️</h2>
        
        {/* Muestra la hora actual, que se actualiza gracias a useEffect */}
        <h3>Hora Actual: {currentTime.toLocaleTimeString()}</h3>
        
        <hr />

        {/* Formulario para añadir nuevas tareas */}
        <form onSubmit={handleAddTask}>
            <input 
            type="text" 
            placeholder="Nombre de la tarea"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            />
            <input 
            type="number"
            placeholder="Horas dedicadas"
            value={taskHours}
            onChange={(e) => setTaskHours(e.target.value)}
            step="0.1" // Permite decimales
            style={{ marginLeft: '10px', marginRight: '10px' }}
            />
            <button type="submit">Agregar Tarea</button>
        </form>

        <h4>Tareas Registradas:</h4>
        <ul>
            {tasks.map((task, index) => (
            <li key={index}>{task.name} - <strong>{task.hours} horas</strong></li>
            ))}
        </ul>

        {/* Muestra el total de horas, calculado de forma optimizada con useMemo */}
        <h3>Total de Horas Dedicadas: {totalHours}</h3>
        </div>
    );
    }

    export default TaskTimer;