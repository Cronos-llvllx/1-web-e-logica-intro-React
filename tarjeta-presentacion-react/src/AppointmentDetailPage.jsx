import React from 'react';
import { useParams, Link } from 'react-router-dom'; // useParams reads URL parameters

    // Dummy data - in a real app, this would come from an API call
    const appointmentsData = {
    1: { id: 1, patient: 'Juan Pérez', doctor: 'Dr. García', time: '10:00 AM', reason: 'Chequeo general' },
    2: { id: 2, patient: 'Ana Gómez', doctor: 'Dra. Martínez', time: '11:30 AM', reason: 'Resultados de laboratorio' },
    3: { id: 3, patient: 'Carlos Sánchez', doctor: 'Dr. López', time: '02:00 PM', reason: 'Consulta de seguimiento' },
    };

    function AppointmentDetailPage() {
    // The `useParams` hook reads the dynamic part of the URL (the `:appointmentId`).
    const { appointmentId } = useParams();
    const appointment = appointmentsData[appointmentId];

    if (!appointment) {
        return <h2>Cita no encontrada</h2>;
    }

    return (
        <div>
        <h2>Detalle de la Cita</h2>
        <p><strong>Paciente:</strong> {appointment.patient}</p>
        <p><strong>Doctor:</strong> {appointment.doctor}</p>
        <p><strong>Hora:</strong> {appointment.time}</p>
        <p><strong>Motivo:</strong> {appointment.reason}</p>
        <br />
        <Link to="/appointments">Volver a la lista de citas</Link>
        </div>
    );
    }

export default AppointmentDetailPage;