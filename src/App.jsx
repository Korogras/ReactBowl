import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Playerform from './components/PlayerForm'
import './App.css'

//import needed functions
//create a fetch request for API
//
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Playerform/>
    </>
  )
}

export default App
