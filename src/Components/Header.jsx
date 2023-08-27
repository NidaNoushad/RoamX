import React from 'react'
import RoamX from '../assets/images/RoamX1.png'
import './Header.css'
const Header = () => {
  return (
    <div className='row'>
    <nav className="navbar navbar-expand-lg App">
      <div className="container-fluid">
   
            <div className='col-3 headerLeft'>
              <div className="headerImg">
                <img src={RoamX} alt="logo" className='headerLogo' />
                </div>
            </div>
            <div className='col-9 '>
        <button className="navbar-toggler  headerRight" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse headerRight" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active cta " aria-current="page" href="#">
    <span class="hover-underline-animation"> Home </span>
</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active cta" aria-current="page" href="#">
    <span class="hover-underline-animation"> Services </span>
</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active cta " aria-current="page" href="#">
    <span class="hover-underline-animation">AboutUs</span>
</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active cta " aria-current="page" href="#">
    <span class="hover-underline-animation">MemberShip</span>
</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active cta " aria-current="page" href="#">
    <span class="hover-underline-animation"> Testimonial</span>
</a>
        </li>
      </ul>         
            </div>
          </div>
        </div>
        
    </nav>
    </div>
  )
}

export default Header
