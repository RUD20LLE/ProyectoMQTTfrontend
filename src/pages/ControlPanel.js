// src/pages/ControlPanel.js
import React from 'react';
import Controles from './Controles';
import Etapas from './Etapas';

function ControlPanel() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', height: '100vh' }}>
      <Controles />
      <Etapas />
    </div>
  );
}

export default ControlPanel;
