import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-[#012E40] relative">
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        Rou
      </Routes>
      
    </div>
  )
}

export default App
