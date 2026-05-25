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
// import ScrollToTop from './Components/ScrollToTop'
import Gallery from './Components/Gallery'

function App() {
  const [] = useState(0)

  return (
    <>
      {/* <ScrollToTop /> */}
      <Navbar />
      <Banner />
      <About />
      <OurProcess />
      <Image1 />
      <Gallery />
      <FAQ />
      <Contact />
      <Image2 />
      <Footer />
    </>
  )
}

export default App
