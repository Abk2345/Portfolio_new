import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'
import {MdFacebook} from 'react-icons/md'

//todo: add links of facebook, github and linkedin here
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/abhishant-kumar-400b37199/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Abk2345" target="_blank"><ImGithub /></a>
        <a href="https://www.facebook.com/abhishant.kumarchotu" target="_blank"><MdFacebook /></a>
    </div>
  )
}

export default HeaderSocials