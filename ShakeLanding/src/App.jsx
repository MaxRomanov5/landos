import { useState } from 'react'
import './App.css'
import Hero from './Sections/Hero/Hero'
import HowItWorks from './Sections/HowItWorks/HowItWorks'
import Tournaments from './Sections/Tournaments/Tournaments'
import Motivation from './Sections/Motivation/Motivation'
import Footer from './Sections/Footer/Footer'

function App() {
  

  return (
    <>
      <Hero/>
      <HowItWorks/>
      <Tournaments/>
      <Motivation/>
      <Footer/>
    </>
  )
}

export default App
