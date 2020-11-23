// src/pages/Etapas.js
import React from 'react';
import BandaTransportadoraSwitch from './etapas/BandaTransportadoraSwitch';
import BandaTransportadoraEstadoDisplay from './etapas/BandaTransportadoraEstadoDisplay';
import CepilladoSwitch from './etapas/CepilladoSwitch';
import CepilladoEstadoDisplay from './etapas/CepilladoEstadoDisplay';
import EnjabonadoSwitch from './etapas/EnjabonadoSwitch';
import EnjabonadoEstadoDisplay from './etapas/EnjabonadoEstadoDisplay';
import SecadoSwitch from './etapas/SecadoSwitch';
import SecadoEstadoDisplay from './etapas/SecadoEstadoDisplay';

function Etapas() {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '20px' }}>
          <BandaTransportadoraSwitch />
          <BandaTransportadoraEstadoDisplay />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <EnjabonadoSwitch />
          <EnjabonadoEstadoDisplay />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <CepilladoSwitch />
          <CepilladoEstadoDisplay />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <SecadoSwitch />
          <SecadoEstadoDisplay />
        </div>
      </div>
    </div>
  );
}

export default Etapas;

