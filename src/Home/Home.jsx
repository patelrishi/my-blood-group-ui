import React from 'react';
import './Home.css';

export const Home = () => {
  return (
    <div className='home_container'>
        <div className='img1_container'>
          <img src='/img1.jpg' alt='img' />
        </div>
        <div className='img2_container'>
          <img src='/img3.jpg' alt='img' />
        </div>
        <div className='text_container'>
          <p>
            Blood donation is a gift that costs nothing but means everything.
               By donating blood, you become a silent hero for those in need.
                 Together, we can make lifesaving support available to all.
          </p>
        </div>
    </div>
  )
}
