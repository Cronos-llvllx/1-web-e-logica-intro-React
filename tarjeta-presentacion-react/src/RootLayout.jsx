import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAuth } from './useAuth';

    function RootLayout() {
    const { user, logout } = useAuth(); // Obtenemos el usuario y la función de logout

    return (
        <>
        <nav style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'space-between' }}>
            <div>
            <Link to="/" style={{ marginRight: '15px' }}>Inicio</Link>
            <Link to="/dashboard" style={{ marginRight: '15px' }}>Dashboard (Protegido)</Link>
            </div>
            <div>
            {user ? (
                <>
                <span style={{ marginRight: '15px' }}>Hola, {user.name}</span>
                <button onClick={logout}>Cerrar Sesión</button>
                </>
            ) : (
                <Link to="/login">Iniciar Sesión</Link>
            )}
            </div>
        </nav>
        <main style={{ padding: '0 20px' }}>
            <Outlet />
        </main>
        </>
    );
    }

export default RootLayout;