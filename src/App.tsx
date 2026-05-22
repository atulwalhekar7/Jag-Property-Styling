import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './Components/About'
import OurProcess from './Components/OurProcess'
import FAQ from './Components/FAQ'

function App() {
  const [] = useState(0)

  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <OurProcess />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
