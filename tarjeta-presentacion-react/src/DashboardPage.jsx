import React from 'react';
import { useAuth } from './useAuth';

    function DashboardPage() {
    const { user } = useAuth(); // Obtenemos los datos del usuario logueado

    return (
        <div>
        <h1>Bienvenido al Dashboard</h1>
        <p>Esta es una ruta protegida.</p>
        {user && <p>Hola, {user.name} ({user.email})</p>}
        </div>
    );
    }

export default DashboardPage;