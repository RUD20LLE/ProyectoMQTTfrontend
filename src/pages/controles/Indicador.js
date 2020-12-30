import React from 'react';

function Indicador({ color, contador }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: color }} />
      <div>{contador}</div>
    </div>
  );
}

export default Indicador;