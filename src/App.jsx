import React, { useEffect, useState } from 'react'
import Header from './Components/Header/Header'
import Courses from './Components/Courses/Courses'
// App.jsx ya main.jsx ke upar
import About from './Components/About/About';
import Team from './Components/Team/Team';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
import Placement from './Components/Placement/Placement'
import PopupForm from './Components/PopupForm/PopupForm'; // <-- import karo

import Lenis from '@studio-freight/lenis'

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // ✅ Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  useEffect(() => {
    // 🔹 Page load ke 3 sec baad popup auto open
    const timer = setTimeout(() => {
      setIsPopupOpen(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <Header openPopup={() => setIsPopupOpen(true)} />
      <Courses openPopup={() => setIsPopupOpen(true)} />
      <About />
      <Team />
      <Placement />
      <Testimonials />
      <Footer />
      
      {/* PopupForm */}
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  )
}

export default App
