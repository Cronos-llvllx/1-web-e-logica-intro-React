import React, { useState } from 'react';

    // Importa todos los componentes de tus talleres anteriores
    import BusinessCard from './BusinessCard';
    import ShoppingList from './ShoppingList';
    import TaskTimer from './TaskTimer';
    import SpaceExplorer from './SpaceExplorer';
    import GuessTheNumberGame from './GuessTheNumberGame';
    import InventoryManager from './InventoryManager';

    function WorkshopsPage() {
    // Este estado es solo para el botón que muestra/oculta el SpaceExplorer
    const [showExplorer, setShowExplorer] = useState(true);

    return (
        <div>
        <h1>Mis Talleres de React</h1>
        <p>Aquí se muestran todos los proyectos construidos anteriormente.</p>
        
        <hr />
        <BusinessCard />
        <hr />
        <ShoppingList />
        <hr />
        <TaskTimer />
        <hr />
        <button onClick={() => setShowExplorer(!showExplorer)}>
            {showExplorer ? 'Ocultar Panel Espacial' : 'Mostrar Panel Espacial'}
        </button>
        {showExplorer && <SpaceExplorer />}
        <hr />
        <GuessTheNumberGame />
        <hr />
        <InventoryManager />
        </div>
    );
    }

export default WorkshopsPage;