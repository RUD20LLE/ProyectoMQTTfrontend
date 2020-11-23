import React, { useState, useEffect, useCallback } from 'react';
import InicioControl from './InicioControl';
import ParoControl from './ParoControl';
import PausaControl from './PausaControl';
import ContinuarControl from './ContinuarControl';

function Indicador() {
  const [color, setColor] = useState('red');
  const [contador, setContador] = useState(60);
  const [intervalId, setIntervalId] = useState(null);

  const handleInicio = () => {
    setColor('green');
    const id = setInterval(() => {
      setContador(prevContador => prevContador - 1);
    }, 1000);
    setIntervalId(id);
  };

  const handleParo = useCallback(() => {
    setColor('red');
    clearInterval(intervalId);
    setContador(60);
  }, [intervalId]);

  const handlePausa = () => {
    setColor('blue');
    clearInterval(intervalId);
  };

  const handleContinuar = () => {
    setColor('green');
    const id = setInterval(() => {
      setContador(prevContador => prevContador - 1);
    }, 1000);
    setIntervalId(id);
  };

  useEffect(() => {
    if (contador === 0) {
      handleParo();
    }
  }, [contador, handleParo]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: color }} />
      <div>{contador}</div>
      <InicioControl onClick={handleInicio} />
      <ParoControl onClick={handleParo} />
      <PausaControl onClick={handlePausa} />
      <ContinuarControl onClick={handleContinuar} />
    </div>
  );
}

export default Indicador;