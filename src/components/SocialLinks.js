import React from 'react'

import whatsapp from '../images/social_media_icons/whatsapp.png';
import phone from '../images/social_media_icons/phone.png';

function SocialLinks() {

    const message = "test";
    const number = "+447487411363";

  return (
    <div className='social-navigation-links'>
        <ul className='social-navigation'>
            {/* <a href={"whatsapp://send?text" + message + number}> */}
            <a href={"https://wa.me/" + number} title='WhatsApp us'>
                <li>
                    <img src={whatsapp}></img>
                </li>
            </a>

            <a href={"tel:+447487411363"} title='Call Us'>
                <li>
                    <img src={phone}></img>
                </li>
            </a>
        </ul>
    </div>
    
  )
}

export default SocialLinks