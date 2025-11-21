import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'



// components
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));

let timer = 0;
let timerCount = null;

const startTimer = () => {
  timerCount = setInterval(() => {
    if(timer == 0) timer = 1;

    if (timer % 10 === 0 && timer !== 0) {
      alert(`¡El contador llegó a ${timer}!`);
    }
    root.render(
      <React.StrictMode>
        <Home timer={timer++} />
      </React.StrictMode>
    );
    console.log(timer);
  }, 1000);
};

const stopTimer = () => {
  clearInterval(timerCount);
  timerCount = null;
  console.log("Se detiene");
};

const countdownTimer = () => {
  clearInterval(timerCount);
  timerCount = null;
  timerCount = setInterval(() => {

    if (timer <= 0) {
      clearInterval(timerCount);
      timerCount = null;
      timer = 0;
      root.render(
        <React.StrictMode>
          <Home timer={0} />
        </React.StrictMode>
      );
      console.log("Cuenta regresiva terminada");
      return;
    }
    timer--;

    root.render(
      <React.StrictMode>
        <Home timer={timer} />
      </React.StrictMode>
    );

  }, 1000);
};

const resetTimer = () => {
  timer = 0;
  root.render(
    <React.StrictMode>
      <Home timer={0} />
    </React.StrictMode>
  );
  console.log("Se reinicia");
};

startTimer();

export { stopTimer, startTimer, resetTimer, countdownTimer };


