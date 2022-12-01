import React from 'react'
import Toggle from '../Toggle/Toggle'
import "./Navbar.css"
import {Link} from "react-scroll"
const Navbar = () => {
  return (
    <div className='n-wrapper'>
        <div className="n-left">
        <div className="n-name">
          WEBTECH
        </div>
        <Toggle/>
        </div>
        <div className="n-right">
        <div className="n-list">
            <ul>

              <Link spy={true} smooth={true} to='Navbar' activeClass="activeClass">
                <li>Home</li>
                </Link>
                <Link spy={true} smooth={true} to="Services" activeClass="activeclass">

                <li>Services</li></Link>
                <Link spy={true} smooth={true} to="Experience" activeClass="activeclass">
                <li>Experience</li></Link>
                <Link spy={true} smooth={true} to="Portfolio" activeClass="activeclass">
                  <li>Portfolio</li></Link>
                  <Link spy={true} smooth={true} to="Testimonial" activeClass="activeclass">
                <li>Testimonials</li></Link>
            </ul>
        </div>
        <button className='button n-button'>Contact</button>
        </div>
    </div>
  )
}

export default Navbar