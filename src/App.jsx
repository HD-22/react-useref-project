import { useState } from "react";
import "./App.css";
import { useRef } from "react";

function App() {
  const [time, setTimer] = useState(0);
  // const [count, setCount] = useState(0);
  // let val = useRef(0);
  // let btnRef = useRef();
  // function handleClick() {
  //   val.current = val.current + 1;
  //   console.log("value of val:", val.current);
  //   setCount(count + 1);
  // }

  // //It runs on every render
  // useEffect(() => {
  //   console.log("main firse render hogayahoon");
  // });

  // function changeColor() {
  //   btnRef.current.style.backgroundColor = "red";
  // }
  let timerRef = useRef(null);

  function startTimer() {
    timerRef.current = setInterval(() => {
      setTimer((time) => time + 1);
    }, 1000);
  }
  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
  function resetTimer() {
    stopTimer();
    setTimer(0);
  }

  return (
    <div>
      <h1>Stopwatch :{time}secconds</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>

      {/* <button ref={btnRef} onClick={handleClick}>
        +
      </button>
      <br />
      <br />
      <button onClick={changeColor}>Change Color 1st Button</button>

      <div>Count: {count}</div> */}
    </div>
  );
}

export default App;
