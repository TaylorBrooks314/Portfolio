import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'
import Resume from './pages/Resume'
function App() {
  const [location,setLocation]=useState({
    home:true,
    about:false,
    resume:false,
    projects:false
  })
  return (
    <>
    <Navbar location={location} setLocation={setLocation}/>
      <Routes>
        <Route path='/' element={<Homepage location={location} setLocation={setLocation}/>}/>
        <Route path='/about' element={<About location={location} setLocation={setLocation}/>}/>
        <Route path='/resume' element={<Resume location={location} setLocation={setLocation}/>}/>
        <Route path='/projects' element={<Projects location={location} setLocation={setLocation}/>}/>
      </Routes>
    </>
  )
}

export default App
