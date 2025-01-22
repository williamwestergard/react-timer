import { useState, useEffect } from "react";
import "../App.css";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let timer;

    if (timerActive) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [timerActive]);

  function startTimer() {
    setTimerActive(true);
  }

  function pauseTimer() {
    setTimerActive(false);
  }

  function resetTimer() {
    setTimerActive(false);
    setSeconds(0);
  }

  return (
    <>
      <h1 className="timer-title">Timer Med React</h1>
      <section className="timer-card">
        <h1 className="timer-counter"> {seconds} </h1>
        <button onClick={startTimer} className="start-button">
          Start
        </button>
        <button onClick={pauseTimer} className="pause-button">
          Pause
        </button>
        <button onClick={resetTimer} className="reset-button">
          Reset
        </button>
      </section>
    </>
  );
}

export default Timer;
