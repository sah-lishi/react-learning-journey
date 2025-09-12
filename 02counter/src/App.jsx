import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

// Here counter is a var and setCounter is a function--> returned by useState 
  const [counter, setCounter] = useState(4) 
  
  // let counter = 4
  const addValue = () => {
    console.log("Clicked");
    // counter = counter + 1 
    // this will not work because it takes old value everytime
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    // this will work because it takes latest value everytime
    // setCounter(prev => prev + 1)
    // setCounter(prev => prev + 1)
    // setCounter(prev => prev + 1)
    // setCounter(prev => prev + 1)

    if (counter<10) {
      setCounter(counter + 1)
    } 
  }

  const minus = () => {
    if (counter>0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai or react</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Increase {counter}</button>
      <br />
      <button
      onClick={minus}
      >Decrease {counter}</button>
    </>
  )
}

export default App
