import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Services/>
      <Contact/> 
    </div>
  )
}

export default App
