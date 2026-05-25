import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './Components/About'
import OurProcess from './Components/OurProcess'
import FAQ from './Components/FAQ'
import Contact from './Components/Contact'
import Image1 from './Components/Image1'
import Image2 from './Components/Image2'

function App() {
  const [] = useState(0)

  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <OurProcess />
      <Image1 />
      <FAQ />
      <Contact />
      <Image2 />
      <Footer />
    </>
  )
}

export default App
