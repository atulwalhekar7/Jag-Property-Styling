import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './Components/About'

function App() {
  const [] = useState(0)

  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Footer />
    </>
  )
}

export default App
