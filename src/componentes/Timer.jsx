import React, { useState, useEffect } from 'react';
import "./estilos/Timer.css";

const Timer = ({ onFinish }) => {
  const [count, setCount] = useState(Math.floor(Math.random() * 71) + 30);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setCount(prevCount => prevCount - 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
      if (count === 0) {
        console.log('Componente desmontado');
        onFinish(); // Llamamos a la función onFinish al llegar a 0
      }
    };
  }, [isRunning, count, onFinish]);

  useEffect(() => {
    if (count === 0) {
      setIsRunning(false); // Detenemos el temporizador al llegar a 0
    }
  }, [count]);

  const toggleTimer = () => {
    setIsRunning(prevState => !prevState);
  };

  return (
    <div id="mi-timer">
      <h2>Timer</h2>
      <p>Count: {count}</p>
      <button onClick={toggleTimer}>
        {isRunning ? 'Stop Timer' : 'Start Timer'}
      </button>
    </div>
  );
};

export default Timer;


