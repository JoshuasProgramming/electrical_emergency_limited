import React from 'react'

import info from '../images/info_image.jpg';

function Contact() {
  return (
    <div className='contact'>
        {/* left */}
        <div className='wrapper'>
            <img src={info} alt='info-image'></img>
        </div>

        {/* right */}
        <div className='info-text'>
            <h2>Contact Us</h2>
            <p>Email: Contact@247asapemergencyelectrical.co.uk</p>
            <a>Learn More</a>
        </div>
    </div>
  )
}

export default Contact