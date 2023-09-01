import React, { useState } from 'react'
import './Testimonials.css'
import {testimonialsData} from '../Data/testimonialsData'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { motion } from "framer-motion";



const Testimonials = () => {
  const [selected,setSelected]=useState(0)
  const tLength=testimonialsData.length;
  const transition={type:"spring" , duration: 3}
  return (
    <div className='container-fluid' style={{paddingLeft:"2rem"}}>
      <div className='row'>
        <div className='col-12 col-md-6 testdetails' >
        <div className='testHeading'>
        <span className='fs-6' style={{color:"var(--orange)"}}>testimonials</span>
        <span className='strokeText'>what they</span>
        <span>say about us</span>
      </div>
          <motion.span style={{ lineHeight: "1.5rem",fontSize:"1.02rem" }} key={selected} initial={{opacity:0,x:-100}}
          animate={{opacity:1,x:0}}
          exit={{opacity:0,x:100}}
          transition={transition}>"{testimonialsData[selected].review}"</motion.span>
          <span className='mb-4 mb-md-0'><span>{testimonialsData[selected].name}</span> 
          ~ {testimonialsData[selected].status}</span>

        </div>
        <div className='col-12 col-md-6 testcol6'>
          <div className='testrelative'>
            <motion.div initial={{opacity:0 , x: -35}} whileInView={{opacity:1 , x:0}} transition={{...transition,duration:2}}></motion.div>
            <motion.div initial={{opacity:0 , x: 20}} whileInView={{opacity:1 , x:0}} transition={{...transition,duration:2}}></motion.div>
          <motion.div className='testimage' key={selected} initial={{opacity:0,x:100}}
          animate={{opacity:1,x:0}}
          exit={{opacity:0,x:-100}}
          transition={transition}
          >
<img src={testimonialsData[selected].image} alt="testimonialpeople" />
</motion.div>
<div className='testbutton'>
<span onClick={()=>{
  selected==0? setSelected(tLength-1):setSelected((prev)=>prev-1)
}}><AiOutlineArrowLeft/></span>
<span onClick={()=>{
  selected===tLength-1? setSelected(0):setSelected((prev)=>prev+1)
}}><AiOutlineArrowRight/></span>
</div>
</div>
        </div>
      </div>
      
    </div>
  )
}

export default Testimonials
