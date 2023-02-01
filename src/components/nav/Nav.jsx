import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {MdHandyman} from 'react-icons/md'
import {MdOutlineSchool} from 'react-icons/md'
import {BiMessageDetail} from 'react-icons/bi'
import {BiBookAlt} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#education' onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}><MdOutlineSchool /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookAlt /></a>
      <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><MdHandyman /></a>
      <a href='#contacts' onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}><BiMessageDetail /></a>
    </nav>
  )
}

export default Nav