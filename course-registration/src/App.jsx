/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/Home/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Home></Home>
      
     
    </>
  )
}

export default App
