import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>

        <div className='footer-section-2'>
            <p><p>We guarantee that all our electrical installations are not only safe and efficient but also fully compliant with the latest standards. Every installation is certified in accordance with BS 7671:2018 Amendment 2:2022 wiring regulations.</p></p>
        </div>

        <div className='footer-section-2'>
            <ul>
                <li><Link to='/Home'>Home</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/services'>Electrical Installations</Link></li>
                <li><Link to='/services'>EICR's</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
            </ul>

            <ul>
                <li><Link to='/services'>Fault Finding and repair</Link></li>
                <li><Link to='/services'>Energy Efficiency Upgrades</Link></li>
                <li><Link to='/services'>Commercial Electrical Solutions</Link></li>
            </ul>

        </div>
    </div>
  )
}

export default Footer