import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Notfound from './pages/Notfound'

function App() {

  return (
    <div className="bg-[#012E40] relative">
      <Navbar/>
      <Routes>
        <Route path='/Aimajoke/' element={<LandingPage/>}/>
        <Route path='/Aimajoke/*' element={<Notfound/>}/>
      </Routes>
      
    </div>
  )
}

export default App
