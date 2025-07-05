import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import 'aos/dist/aos.css'
import AOS from 'aos'
import BinaryBackground from './components/BinaryBackground'
import LiveProjects from './components/LiveProjects'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  return (
    <>
      <BinaryBackground />
      <main className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
