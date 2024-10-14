import React from 'react'

import '../styles/styles.css';

//import images
import logo from '../images/Emergency Electrical Limited logo.png';

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="nav">

        {/* left */}

        <div className='left-nav'>
            {/* <h1>Electrical Emergency Limited</h1> */}
            <Link to="/"><img src={logo}></img></Link>
        </div>

        {/* middle */}
        <div className='middle-nav'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Our Services</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar