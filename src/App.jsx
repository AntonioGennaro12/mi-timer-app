import React, { useState } from 'react';
import Timer from './componentes/Timer';
import './App.css'

const App = () => {
  const [showTimer, setShowTimer] = useState(true);

  const handleTimerFinish = () => {
    setShowTimer(false); // Cuando Timer llega a 0, desmontamos el componente
  };

  return (
    <div id="cont-timer">
      {showTimer && <Timer onFinish={handleTimerFinish} />}
      {!showTimer && <p>Timer terminado y desmontado!</p>}
    </div>
  );
};

export default App;

/** 
import React, { useState, useEffect } from 'react';
import './App.css'

const Timer = () => {
  const [count, setCount] = useState(Math.floor(Math.random() * 91) + 10);
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
        // Aquí podrías realizar alguna acción al llegar a 0, como desmontar el componente
      }
    };
  }, [isRunning, count]);

  useEffect(() => {
    if (count === 0) {
      setIsRunning(false); // Detener el temporizador al llegar a 0
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
*/

/*
const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  // Función para incrementar el contador cada segundo
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Función de limpieza para detener el temporizador al desmontar el componente
    return () => clearInterval(intervalId);
  }, []); // Se pasa un array vacío como dependencia para que se ejecute solo una vez (montaje) y limpieza (desmontaje)

  // Se ejecuta cada vez que el componente se renderiza
  return (
    <div id="mi-timer">
      <h2>Timer</h2>
      <p>Seconds: {seconds}</p>
    </div>
  );
};
export default Timer;
*/
/**


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

*/
