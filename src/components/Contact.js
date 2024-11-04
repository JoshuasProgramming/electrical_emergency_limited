import React from 'react'

import info from '../images/info_image.jpg';

import about19 from '../images/about/about19.jpg';

function Contact() {
  return (
    <div className='contact'>
        {/* left */}
        <div className='wrapper'>
            <img src={about19} alt='info-image'></img>
        </div>

        {/* right */}
        <div className='info-text' id='contact'>
            <h2>Contact Us</h2>
            <p>Email: Contact@247asapemergencyelectrical.co.uk</p>
            <a href='/services'>View Services</a>
        </div>
    </div>
  )
}

export default Contact