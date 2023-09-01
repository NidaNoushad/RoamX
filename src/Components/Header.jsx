import React,{useState} from 'react'
import RoamX from '../assets/images/RoamX1.png'
import './Header.css'

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  return (
    <nav className="navbar container-fluid">
       <div className=" headerImg"><img src={RoamX} alt="logo" className='headerLogo' /></div>
       <div className="navbar-menu">
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={`menu-items ${menuActive ? 'active' : ''}`}>
          <li className='cta'> <span className="hover-underline-animation"> Home </span></li>
          <li className='cta'><span className="hover-underline-animation"> Services </span></li>
          <li className='cta'> <span className="hover-underline-animation">AboutUs</span></li>
          <li className='cta'><span className="hover-underline-animation">MemberShip</span></li>
          <li className='cta'><span className="hover-underline-animation"> Testimonial</span></li>
          </ul>
      </div>
    </nav>
  )
}

export default Header

