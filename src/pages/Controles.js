// src/pages/Controles.js
import React from 'react';
import InicioControl from './controles/InicioControl';
import ParoControl from './controles/ParoControl';
import PausaControl from './controles/PausaControl';
import ContinuarControl from './controles/ContinuarControl';
import Indicador from './controles/Indicador';

function Controles() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '10px' }}>
      <InicioControl />
      <ParoControl />
      <PausaControl />
      <ContinuarControl />
      <Indicador />
    </div>
  );
}

export default Controles;
