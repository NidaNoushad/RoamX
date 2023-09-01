import React from 'react'
import './Aboutus.css'
import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image3 from '../assets/images/image3.jpg'
import image4 from '../assets/images/image4.jpg'
import tick from '../assets/images/tick.png'
import brand1 from '../assets/images/brand1.png'
import brand2 from '../assets/images/brand2.png'
import brand3 from '../assets/images/brand3.png'


const Aboutus = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12 col-md-6 imagecontainer mb-4'>
          <div className='aboutusImages'>
            <img src={image1} alt="images1" className='fullHeight' />
            <img src={image2} alt="image2" className='fullWidth ' />
            <img src={image3} alt="image3" className='halfWidth' />
            <img src={image4} alt="image4" className='halfWidth' />
          </div>
        </div>
        <div className='col-12 col-md-6 about'>
          <p className='text-uppercase'>some reasons</p>
          <h1 className='aboutheading'><span className='strokeText'>why</span><span>choose us?</span></h1>
          <div className='aboutlist'>
            <div>
              <img src={tick} alt="ticks" />
              <span>Lorem ipsum, dolor sit amet consectetur adipisicing.</span>
            </div>
            <div>
              <img src={tick} alt="ticks" />
              <span>Lorem ipsum, dolor sit  consectetur adipisicing.</span>
            </div>
            <div>
              <img src={tick} alt="ticks" />
              <span>Lorem ipsum, dolor amet consectetur adipisicing.</span>
            </div>
            <div>
              <img src={tick} alt="ticks" />
              <span>Lorem ipsum, sit amet consectetur adipisicing.</span>
            </div>
            <div className='partners'>
          <p>our partners</p>
          <div className='brandimage'>
            <div><img src={brand1} alt="" /></div>
            <div><img src={brand2} alt="" /></div>
            <div><img src={brand3} alt="" /></div>

          </div>

        </div>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Aboutus
