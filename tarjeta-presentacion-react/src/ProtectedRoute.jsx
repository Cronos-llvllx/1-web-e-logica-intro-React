import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './useAuth';

    function ProtectedRoute() {
    const { user } = useAuth(); // Obtenemos la información del usuario del contexto

    // Si no hay usuario, redirigimos a la página de login
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // Si hay un usuario, renderizamos la página hija que se quiere visitar
    return <Outlet />;
    }

export default ProtectedRoute;