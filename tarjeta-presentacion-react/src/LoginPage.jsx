import React from 'react';
import { useAuth } from './useAuth';
import { useNavigate, useLocation } from 'react-router-dom';

    function LoginPage() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Redirigir al usuario a la página que intentaba visitar antes del login
    const from = location.state?.from?.pathname || '/dashboard';

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        // Aquí no validamos contraseña, es una simulación
        login({ email });
        navigate(from, { replace: true });
    };

    return (
        <div>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
            <label>
            Correo Electrónico:
            <input name="email" type="email" required />
            </label>
            <button type="submit">Entrar</button>
        </form>
        </div>
    );
    }

export default LoginPage;