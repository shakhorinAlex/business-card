import React from 'react'
import ToggleDesign from './components/ToggleDesign'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
      <div className="container">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
  )
}

export default App

// <div className="body">
//   <ToggleDesign />
//       </div>