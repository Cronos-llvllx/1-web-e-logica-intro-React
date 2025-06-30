    function BusinessCard() {
    // Estilos en línea como un objeto de JavaScript
    const cardStyle = {
        fontFamily: 'Arial, sans-serif',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        maxWidth: '300px',
        margin: '20px auto',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        textAlign: 'center',
        backgroundColor: '#f9f9f9'
    };

    const nameStyle = {
        fontSize: '24px',
        color: '#333',
        marginBottom: '5px'
    };

    const professionStyle = {
        fontSize: '18px',
        color: '#666',
        fontStyle: 'italic',
        marginBottom: '15px'
    };

    const messageStyle = {
        fontSize: '14px',
        color: '#444'
    };

    // El JSX que renderiza la tarjeta de presentación
    return (
        <div style={cardStyle}>
        <h1 style={nameStyle}>Hector Gomez</h1>
        <h2 style={professionStyle}>Desarrollador Frontend</h2>
        <p style={messageStyle}>
            ¡Hola! Soy un apasionado desarrollador creando experiencias de usuario interactivas y dinámicas con React.
        </p>
        </div>
    );
    }

    // Exportamos el componente para poder usarlo en otros archivos
    export default BusinessCard;