import { useState } from 'react';
import './App.css'

function App() {

  const [counter, setCounter] = useState(15);
  // let counter = 5;

  const addValue = () => {
    // console.log("value added", Math.random());
    // counter  = counter + 1;
    setCounter(counter + 1);
  }
  const decValue = () =>{
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value: {counter}</button>
      <br/>
      <button onClick = {decValue}>Decrease Value: {counter}</button>
    </>
  )
}

export default App
