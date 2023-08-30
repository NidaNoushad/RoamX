import { useState } from 'react'
import './App.css'
import Aboutus from './Components/Aboutus'
import Hero from './Components/Hero'
import Membership from './Components/Membership'
import Newsletter from './Components/Newsletter'
import Testimonials from './Components/Testimonials'
import TourTypes from './Components/TourTypes'
import Footer from './Footer'

function App() {
  const [count, setCount]= useState(0)

  return (
    <div className="App">
     <Hero/>
     <TourTypes/>
     <Aboutus/>
     <Membership/>
     <Testimonials/>
     <Newsletter/>
     <Footer/>
    </div>
  )
}

export default App
