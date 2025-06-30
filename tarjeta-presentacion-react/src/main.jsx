// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

// Importa las páginas y el nuevo Layout
import RootLayout from './RootLayout'; // <-- 1. IMPORTA EL LAYOUT DESDE SU NUEVO ARCHIVO
import HomePage from './HomePage';
import AppointmentsPage from './AppointmentsPage';
import AppointmentDetailPage from './AppointmentDetailPage';
import WorkshopsPage from './WorkshopsPage';
import './index.css';

// La configuración del router no cambia, solo que ahora importa RootLayout.
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // <-- 2. SE USA AQUÍ, IGUAL QUE ANTES
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'appointments',
        element: <AppointmentsPage />,
      },
      {
        path: 'appointments/:appointmentId',
        element: <AppointmentDetailPage />,
      },
      {
        path: 'workshops',
        element: <WorkshopsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);