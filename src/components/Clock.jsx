import React, { useState, useEffect } from "react";

const Clock = () => {
  // Estado privado del componente
  const [fecha, setFecha] = useState(new Date());
  const [edad, setEdad] = useState(0);
  const nombre = "Martin";
  const apellidos = "San José";

  useEffect(() => {
    const timerID = setInterval(() => {
      tick();
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setEdad(edad + 1);
    setFecha(new Date());
  };

  return (
    <div>
      <h2>Hora Actual: {fecha.toLocaleTimeString()}</h2>
      <h3>
        {nombre} {apellidos}
      </h3>
      <h1>Edad: {edad}</h1>
    </div>
  );
};

export default Clock;
