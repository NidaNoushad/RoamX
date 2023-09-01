import React from 'react'
import Header from './Header'
import './Hero.css'
import MainLeftSection from './MainLeftSection'
import travelvideo1 from '../assets/images/travelvideo1.jpg'
import plane from '../assets/images/plane.png'
import planeback from '../assets/images/hero_image_back.png'
import { BsPlayCircleFill } from 'react-icons/bs';
import { motion } from "framer-motion";

const Hero = () => {
  const transition={type:"spring" , duration: 3}
  const mobile=window.innerWidth<=768? true:false;
  return (
    <div>
      <div className='row heroSection'>
        <div className='col-12 col-md-8 leftSection'>
           <Header/>
          <MainLeftSection/> 
        </div>
        <div className='col-12 col-md-4 rightSection'>
          <div className='rightSectionButton'>
            <button className='buttonjoin text-center'>
             J O I N N O W
              <div id="clip">
                <div id="leftTop" className="corner"></div>
                <div id="rightBottom" className="corner"></div>
                <div id="rightTop" className="corner"></div>
                <div id="leftBottom" className="corner"></div>
              </div>
              <span id="rightArrow" className="arrow"></span>
              <span id="leftArrow" className="arrow"></span>
            </button>
          </div>
          <motion.div initial={{left: mobile? "2rem" : "15rem"}} whileInView={{left: mobile?"11rem":"11rem"}} transition={{...transition,type:'tween'}} className="video-box ">
            <img src={travelvideo1} alt="video illustration"/>
            <a href="#" className="glightbox position-absolute top-50 start-50 translate-middle">
              <span className='text-center play'><BsPlayCircleFill/></span>
              <span className="animation animation--border-1"></span>
              <span className="animation animation--border-2"></span>
            </a>
          </motion.div>
          <div className='planeSection'>
            <motion.div initial={{left: mobile?"4rem":"5rem"}} whileInView={{left: mobile?"-1.5rem":"0rem"}} transition={{...transition,type:'tween'}}>
            <img src={plane} alt="plane"/>
            </motion.div>
            <motion.div initial={{left: mobile? "-2rem" : "-3rem"}} whileInView={{left: mobile? "-1rem":'1.5rem'}} transition={{...transition,type:'tween'}}>

            <img src={planeback} alt="planeback" />

            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
