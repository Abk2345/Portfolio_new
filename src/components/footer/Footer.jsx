import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {GrLinkedinOption} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Abhishant kumar</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#education'>Education</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contacts'>Contacts</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.facebook.com/ap84pd/' target='_blank'><FaFacebookF /></a>
        <a href='https://www.linkedin.com/in/anubhav84prasad/' target='_blank'><GrLinkedinOption /></a>
        <a href='https://www.instagram.com/_.anubhav.84._/' target='_blank'><FiInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All Rights Are Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer