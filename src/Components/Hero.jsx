import React from 'react'
import Header from './Header'
import './Hero.css'
import MainLeftSection from './MainLeftSection'
import travelvideo1 from '../assets/images/travelvideo1.jpg'
import plane from '../assets/images/plane.png'
import planeback from '../assets/images/hero_image_back.png'
import { BsPlayCircleFill } from 'react-icons/bs';

const Hero = () => {
  return (
    <div>
      <div className='row heroSection'>
        <div className='col-8 leftSection'>
           <Header/>
          <MainLeftSection/> 
        </div>
        <div className='col-4 rightSection'>
          <div className='rightSectionButton'>
            <button>
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
          <div className="video-box ">
            <img src={travelvideo1} alt="video illustration"/>
            <a href="#" className="glightbox position-absolute top-50 start-50 translate-middle">
              <span className='text-center play'><BsPlayCircleFill/></span>
              <span className="animation animation--border-1"></span>
              <span className="animation animation--border-2"></span>
            </a>
          </div>
          <div className='planeSection'>
            <img src={plane} alt="plane" />
            <img src={planeback} alt="planeback" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
