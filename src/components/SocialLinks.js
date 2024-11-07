import React from 'react'

import whatsapp from '../images/social_media_icons/whatsapp.png';

function SocialLinks() {

    const message = "test";
    const number = "+447487411363";

  return (
    <div className='social-navigation-links'>
        <ul className='social-navigation'>
            <a href={"whatsapp://send?text" + message + number}>
                <li>
                    <img src={whatsapp}></img>
                </li>
            </a>
        </ul>
    </div>
    
  )
}

export default SocialLinks