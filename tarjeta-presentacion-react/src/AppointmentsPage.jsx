import React from 'react';
import { Link } from 'react-router-dom'; // Link is used for navigation

    const appointments = [
    { id: 1, patient: 'Juan Pérez', doctor: 'Dr. García', time: '10:00 AM' },
    { id: 2, patient: 'Ana Gómez', doctor: 'Dra. Martínez', time: '11:30 AM' },
    { id: 3, patient: 'Carlos Sánchez', doctor: 'Dr. López', time: '02:00 PM' },
    ];

    function AppointmentsPage() {
    return (
        <div>
        <h2>Lista de Citas Programadas</h2>
        <ul>
            {appointments.map(app => (
            <li key={app.id}>
                {/* Each item links to its own detail page */}
                <Link to={`/appointments/${app.id}`}>
                Cita con {app.patient} a las {app.time}
                </Link>
            </li>
            ))}
        </ul>
        </div>
    );
    }

export default AppointmentsPage;