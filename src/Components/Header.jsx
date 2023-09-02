import React,{useState} from 'react'
import RoamX from '../assets/images/RoamX1.png'
import './Header.css'
import {Link} from 'react-scroll';
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
          <li className='cta'><Link activeClass="active" to="header" spy={true} smooth={true}> <span className="hover-underline-animation"> Home </span></Link></li>
          <li className='cta'><Link activeClass="active" to="service" spy={true} smooth={true}> <span className="hover-underline-animation"> Services </span></Link></li>
          <li className='cta'><Link activeClass="active" to="about" spy={true} smooth={true}>  <span className="hover-underline-animation">AboutUs</span></Link></li>
          <li className='cta'><Link activeClass="active" to="members" spy={true} smooth={true}> <span className="hover-underline-animation">MemberShip</span></Link></li>
          <li className='cta'><Link activeClass="active" to="testimonial" spy={true} smooth={true}><span className="hover-underline-animation"> Testimonial</span></Link></li>
          </ul>
      </div>
    </nav>
  )
}

export default Header

