import React from 'react'
import './MainLeftSection.css'
import { FaPlane } from 'react-icons/fa';
import { motion } from "framer-motion"

const MainLeftSection = () => {
  const transition={type:"spring" ,duration: 3}
  const mobile=window.innerWidth<=768? true:false;
  return (
    <div  className="mx-4 text-center text-md-start">
      <div className='theBest'>
        <motion.div initial={{left: mobile? "230px" : "266px"}} whileInView={{left:"0px"}} transition={{...transition,type:'tween'}}  className='fs-5 theBestplane'><FaPlane/></motion.div>
        <span>where dream take flights</span>
      </div>
      <div className='mlsHeading mt-3 fw-bold'>
        <div>
        <h2><span className='strokeText'>Plan</span> your</h2>
      </div>
      <div>
        <h2>perfect tour</h2>
      </div>
      <div>
        <h2>with us</h2>
      </div>
      </div>
      <div className='mlsPara'>
        <p className='fs-5 lead '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, reiciendis.
        </p>
      </div>
      <div className='mlsFigures mt-4 text-start'>
        <div className='mlsFiguresText'>
          <span>50K+</span>
          <span>customers</span>
          <span>Happy customers</span>
        </div>
        <div className='mlsFiguresText'>
          <span>25K+</span>
          <span>Experience</span>
          <span>Traveling Experience</span>
        </div>
        <div className='mlsFiguresText'>
          <span>19+</span>
          <span>guides</span>
          <span>Professional Guides</span>
        </div>
      </div>
      <div className='buttons my-5'>
      <a href="">
        <div className='button1'>
        <span>Book Now</span>
        </div>
        </a>
        <div> 
          <a href="">
        <span className='btn btn-outline-success button2'>learn more</span></a>
        </div>
      </div>
    </div>
  )
}

export default MainLeftSection
