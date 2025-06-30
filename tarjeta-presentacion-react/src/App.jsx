import React, { useState } from 'react';

import BusinessCard from './BusinessCard';
import ShoppingList from './ShoppingList';
import TaskTimer from './TaskTimer';
import SpaceExplorer from './SpaceExplorer';
import GuessTheNumberGame from './GuessTheNumberGame';
import InventoryManager from './InventoryManager';

function App() {
  // 2. Crea un estado para mostrar/ocultar el panel del explorador
  const [showExplorer, setShowExplorer] = useState(true);
      const appStyle = {
    textAlign: 'center'
  };

  const separatorStyle = {
    margin: '40px auto',
    border: '1px dashed #ccc',
    width: '50%'
  };
  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    marginBottom: '20px'
  };
  // El return ahora incluye nuestro componente de tarjeta
  return (
<div style={appStyle}>
      {/* --- Taller 1 --- */}
      <BusinessCard />
      <hr style={separatorStyle} />
      {/* --- Taller 2 --- */}
      <ShoppingList />
      <hr style={separatorStyle} />
      {/* --- Taller 3 --- */}
      <TaskTimer />
      <hr style={separatorStyle} />

      {/* --- Taller 4: Ciclo de Vida --- */}
      
      {/* 3. Botón para cambiar el estado de visibilidad */}
      <button onClick={() => setShowExplorer(!showExplorer)} style={buttonStyle}>
        {showExplorer ? 'Ocultar Panel Espacial' : 'Mostrar Panel Espacial'}
      </button>

      {/* 4. Renderizado condicional: El panel solo se muestra si `showExplorer` es true */}
      {showExplorer && <SpaceExplorer />}
            <hr style={separatorStyle} />

      {/* --- Taller 5: Renderizado Condicional y Composición --- */}
      <GuessTheNumberGame />
      {/* --- Taller 6: Hooks Avanzados --- */}
      <InventoryManager />
    </div>
    
  );
}

export default App;

