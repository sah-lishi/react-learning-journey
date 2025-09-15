import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "lili",
    gender: "F"
  }
  let myArr = [1, 2, 3]
  return (
    <>
      <h1 className='bg-green-800 text-black p-4 rounded mb-5'>Tailwind test</h1>
      <Card channelName ="myReactProject1" />
      <Card channelName ="myReactProject2" btnText = "Click Me"/>

    </>
  )
}

export default App
