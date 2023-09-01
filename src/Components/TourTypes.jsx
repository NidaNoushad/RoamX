import React from 'react'
import './TourTypes.css'
import seatour1 from '../assets/images/seatour1.png'
import travel from '../assets/images/travel.png'
import wedding from '../assets/images/wedding.png'
import adventure from '../assets/images/adventure.png'
const TourTypes = () => {
  return (
    <div className='container-fluid'>
      <div className='heading text-center mb-4'>
      <span className='strokeText'>explore our</span><span className='fst-italic'>popular</span><span className='strokeText'>tour types</span>
      </div>
      <div className='row'>
        <div className='col-md-3 col-12 mb-3  cardcenter'>
        <div className="card wallet">
    <div className="overlay"></div>
    <div className="circle">
            <defs></defs>
         <img src={seatour1} alt="seatour" style={{width:"100%",zIndex:"1"}} />
    </div>
    <p>Sea Tour</p>
    <p className='lead' style={{marginTop:"3px"}}>30 places</p>
</div>
     </div>
        <div className='col-md-3 col-12 mb-3 cardcenter'>
        <div className="card wallet">
    <div className="overlay"></div>
    <div className="circle">
            <defs></defs>
        <img src={travel} alt="travel" style={{width:"100%",zIndex:"1"}}/>  
        

    </div>
    <p>Travel</p>
    <p className='lead' style={{marginTop:"3px"}}>30 places</p>
</div>
        </div>
        <div className='col-md-3 col-12 mb-3 cardcenter'>
        <div className="card wallet">
    <div className="overlay"></div>
    <div className="circle">
            <defs></defs>
          <img src={adventure} alt="adventure" style={{width:"100%",zIndex:"1"}} />
    </div>
    <p>Adventure</p>
    <p className='lead' style={{marginTop:"3px"}}>30 places</p>
</div>
        </div>
        <div className='col-md-3 col-12 mb-3  cardcenter'>
        <div className="card wallet">
    <div className="overlay"></div>
    <div className="circle">  
            <defs></defs>
            <img src={wedding} alt="wedding" style={{width:"80%",zIndex:"1"}} />
    </div>
    <p>Wedding</p>
    <p className='lead' style={{marginTop:"3px"}}>30 places</p>
</div>
        </div>
      </div>
    </div>
  )
}

export default TourTypes
