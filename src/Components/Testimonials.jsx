import React, { useState } from 'react'
import './Testimonials.css'
import {testimonialsData} from '../Data/testimonialsData'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';



const Testimonials = () => {
  const [selected,setSelected]=useState(0)
  const tLength=testimonialsData.length
  return (
    <div className='container-fluid' style={{paddingLeft:"2rem"}}>
      
      <div className='row'>
        
        <div className='col-6 testdetails' >
        <div className='testHeading'>
        <span className='fs-6' style={{color:"var(--orange)"}}>testimonials</span>
        <span className='strokeText'>what they</span>
        <span>say about us</span>
      </div>
          <span style={{ lineHeight: "1.5rem",fontSize:"1.02rem" }}>"{testimonialsData[selected].review}"</span>
          <span><span>{testimonialsData[selected].name}</span> 
          ~ {testimonialsData[selected].status}</span>

        </div>
        <div className='col-6 testcol6'>
          <div className='testrelative'>
            <div></div>
            <div></div>
          <div className='testimage'>
<img src={testimonialsData[selected].image} alt="testimonialpeople" />
</div>
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
