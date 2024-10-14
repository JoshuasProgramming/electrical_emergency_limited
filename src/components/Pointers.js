import React from 'react';

import contactIcon from '../images/services/icons/contact.png';
import phone from '../images/services/icons/24-7.png';
import priceTag from '../images/services/icons/price-tag.png';

function Pointers() {
  return (
    <div className='pointers'>
        <div className='icon-wrapper'>
            <img src={contactIcon} alt='contactIcon'></img>
            <p>No hidden fees</p>
        </div>

        <div className='icon-wrapper'>
            <img src={phone} alt='phoneIcon'></img>
            <p>We're here for emergency calls around the clock</p>
        </div>

        <div className='icon-wrapper'>
            <img src={priceTag} alt='priceTagIcon'></img>
            <p>We offer same-day appointments</p>
        </div>
    </div>
  )
}

export default Pointers