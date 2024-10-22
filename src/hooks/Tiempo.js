import { useEffect, useState } from 'react';

function Tiempo() {
  const [tiempo, setTiempo] = useState('');

  useEffect(() => {
      const tiempoActual = new Date().toLocaleTimeString('ar-AR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setTiempo(tiempoActual);
    }, []);

  return tiempo;
}

export default Tiempo;
