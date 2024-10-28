import React from 'react'

import info from '../images/info_image.jpg'

function Info() {
  return (
    <div className='info'>
        {/* left */}
        <div className='wrapper'>
            <img src={info} alt='info-image'></img>
        </div>

        {/* right */}
        <div className='info-text'>
            <h2>What are we</h2>
            <p>At 24/7 ASAP Emergency Electrical Limited, we are dedicated professionals committed to providing reliable and efficient electrical services around the clock. Our mission is to ensure the safety, comfort, and convenience of our clients by delivering top-notch electrical solutions whenever they need us. We pride ourselves on honesty and transparency in every interaction, always prioritising your needs and striving to exceed your expectations.</p>
            <a href='/about'>About Us</a>
        </div>
    </div>
  )
}

export default Info