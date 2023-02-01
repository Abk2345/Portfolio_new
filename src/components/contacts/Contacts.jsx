import React from 'react'
import './Contacts.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiWhatsappLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contacts = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pffu01h', 'template_h0j7wrq', form.current, 'aWrSz2M4XOnXH2KjU')
    alert("Message sent!")
    e.target.reset()
  };

  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contacts__container'>
        <div className='contacts__options'>
          <article className="contacts__option">
            <MdOutlineMailOutline className='contacts__option-icon'/>
            <h4>Email</h4>
            <h5>abhishant11@gmail.com</h5>
            <a href='mailto:abhishant11@gmail.com' target='_blank'>Send a message</a>
          </article>
         
          <article className="contacts__option">
            <h4>WhatsApp</h4>
            <RiWhatsappLine  className='contacts__option-icon'/>
            <h5>9334867479</h5>
            <a href='https://api.whatsapp.com/send?phone+9334867479' target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts