//Toggle.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Toggle() {
  const [isToggled, setIsToggled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasPassedLogin = sessionStorage.getItem('hasPassedLogin');
    if (hasPassedLogin !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  const handleToggle = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/toggle`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ toggle: !isToggled }),
      });
      const data = await response.json();
      if (response.ok) {
        setIsToggled(!isToggled);
      } else {
        console.error('Error de toggle:', data.message);
      }
    } catch (error) {
      console.error('Error de red:', error.message);
    }
  };

  return (
    <div style={{ background: isToggled ? 'black' : 'white' }}>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
}

export default Toggle;


