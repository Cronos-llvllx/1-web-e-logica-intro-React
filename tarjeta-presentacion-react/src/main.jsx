import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './AuthProvider';

// Importa todos los componentes de página
import RootLayout from './RootLayout';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import ProtectedRoute from './ProtectedRoute'; 
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
      
      // --- Rutas Protegidas ---
      // Usamos el componente ProtectedRoute como un layout para las rutas que queremos proteger.
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: 'dashboard',
            element: <DashboardPage />,
          },
          // Podrías añadir más rutas protegidas aquí, como /perfil, /configuracion, etc.
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. ENVUELVE LA APLICACIÓN CON EL AUTHPROVIDER */}
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);