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
    root.render(
      <React.StrictMode>
        <Home timer={timer++} />
      </React.StrictMode>
    );
  }, 1000);
};

const stopTimer = () => {
  clearInterval(timerCount);
  timerCount = null;
  console.log("Se detiene");
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

export { stopTimer, startTimer, resetTimer };


