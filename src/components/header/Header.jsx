import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/dp_profile.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        
        {/*Introduction part*/}
        <h3>Hello, I'm</h3>
        <h1>Abhishant Kumar</h1>
        <h3 className="text-light">Final year Undergrad Student</h3>
        <h3 className="text-light">Department of Industrial and Systems Engineering, IIT Kharagpur</h3>

        <CTA />
        <HeaderSocials />

        {/*Image*/}
        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        {/*Scroll down option to go to contact option*/}
        <a href="#contacts" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header