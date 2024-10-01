import React from 'react'

import '../styles/styles.css';

//import images
import logo from '../images/logo_2.png';

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
                <li>Home</li>
                <li>About</li>
                <li>Our Services</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar