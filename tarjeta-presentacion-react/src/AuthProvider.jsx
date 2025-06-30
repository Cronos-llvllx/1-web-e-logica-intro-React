import React, { useState } from 'react';
import { AuthContext } from './AuthContext'; // Importa el contexto

// Este archivo SOLO define y exporta el componente Proveedor.
    export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser({ email: userData.email, name: 'Usuario Ejemplo' });
    };

    const logout = () => {
        setUser(null);
    };

    const value = {
        user,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}