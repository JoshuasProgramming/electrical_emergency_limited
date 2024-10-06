import React from 'react'

import '../styles/styles.css';

//import images
import logo from '../images/logo_2.png';

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="nav">

        {/* left */}

        <div className='left-nav'>
            {/* <h1>Electrical Emergency Limited</h1> */}
            <img src={logo}></img>
        </div>

        {/* middle */}
        <div className='middle-nav'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li>Our Services</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar