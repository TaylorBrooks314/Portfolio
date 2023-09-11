import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'
function App() {
  
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </>
  )
}

export default App
