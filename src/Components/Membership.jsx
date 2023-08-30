import React from 'react'
import './Membership.css'
import { plansData } from '../Data/plansData'
import tick from '../assets/images/tick.png'
const Membership = () => {
  return (
    <div>
      <div className='mbheading mb-3'>
        <span className='strokeText'>READY TO START</span>
        <span className='mx-4 fst-italic'>YOUR JOURNEY</span>
        <span className='strokeText'>now with us</span>
      </div>
      <div className='mbplans row my-5'>
        {plansData.map((data, index) => (
          <div className='col-md-4 col-12' key="index">
            <div className={`container container-${data.name.toLowerCase()}`}>
              <div className="card_box">
                <span className={`${data.name.toLowerCase()} span1`}></span>
                <div className='mbdetails'>
                  <h1 className='mb-4'>${data.price}</h1>
                  <div className='features mb-4'>
                    {data.features.map((feature, index) => (
                      <div key={index} className='featurelist'>
                        <img src={tick} alt="" style={{ width: "1rem", height: "1rem" ,margin:"7px"}} />
                        <p>{feature}</p>
                      </div>
                    ))}
                   </div> 
                   <a href="">
        <div className='button1'>
        <span>join Now</span>
        </div>
        </a> 
        </div>
                </div>

              </div>
            </div>
        

        ))}


      </div>

    </div>
  )
}

export default Membership
