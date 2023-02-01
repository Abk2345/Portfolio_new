import React from 'react'
import './About.css'
import ME from '../../assets/dp_profile.jpeg'
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className='about__me-image'>
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about__content">
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Android Development</h5>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Web Development</h5>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5> Artificial Intelligence </h5>
            </article>
          </div>
          <p>
            Hi, I am <b>Abhishant kumar</b>. I am a <b>final </b>year Undergraduate student 
            pursuing <b>Industrial Engineering </b> from the
            <b> Department of Industrial and Systems Engineering, Indian Institute of Technology (IIT) Kharagpur. </b>I am from Nalanda, Bihar.
          </p>
          <p>
          I love playing with software and using technology to create value for all.
          I enjoy learning new things and strongly believe that continuous education is the only way for all of us to evolve. 
          I have a firm knowledge of C, C++, Python, Java and experience with web development technologies such as HTML, CSS, JavaScript, React and Angular.
          My fields of interest includes Software Development, AI Solutions, and Financial Management. 
          New challenges excites me to ponder upon using my analytical skills and problem solving abilities.
          </p>
          <p>
            I love sports and I am a field hockey 
            player. I love to read books and enjoy music. I 
          </p>

          <h4>I would feel extremely excited to announce that I will be joining Rakuten Group as Application Engineer this fall!</h4>

          <a href='#contacts' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>


    </section>
  )
}

export default About