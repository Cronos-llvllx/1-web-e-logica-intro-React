// src/RootLayout.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

// Este es el mismo componente, pero ahora en su propio archivo.
function RootLayout() {
    return (
        <>
        <nav style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
            <Link to="/" style={{ marginRight: '15px' }}>Inicio</Link>
            <Link to="/appointments" style={{ marginRight: '15px' }}>Citas</Link>
            <Link to="/workshops">Talleres Anteriores</Link>
        </nav>
        <main style={{ padding: '0 20px' }}>
            {/* Outlet renderiza el componente de la ruta activa */}
            <Outlet />
        </main>
        </>
    );
    }

// ¡Este paso es crucial! Exportamos el componente para que otros archivos puedan usarlo.
export default RootLayout;