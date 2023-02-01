import React from 'react'
import './Skills.css'
import {BiCodeAlt} from 'react-icons/bi'

const Skills = () => {
  return (
    <section id='skills'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container skills__container">
        <div className="skills__programming_languages">
          <h3>Programming Languages</h3>
          <div className='skills__content'>
            <article className='skills__details'>
              <BiCodeAlt className='skills__details-icon'/>
              <div>
                <h4>C/C++</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills__details'>
              <BiCodeAlt className='skills__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills__details'>
              <BiCodeAlt className='skills__details-icon'/>
              <div>
                <h4>Javacript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills__details'>
              <BiCodeAlt className='skills__details-icon'/>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills__details'>
              <BiCodeAlt className='skills__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div>
        </div>

        <div className="skills__softwares">
          <h3>Softwares and Development Boards</h3>
          <div className='skills__content'>
          <article className='skills__details'>
              <BiCodeAlt className='skills__details-icon'/>
              <div>
                <h4>Android Studio</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills__details'>
              <BiCodeAlt className='skills__details-icon'/>
              <div>
                <h4>Cplex</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills__details'>
              <BiCodeAlt className='skills__details-icon'/>
              <div>
                <h4>Matlab</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills__details'>
              <BiCodeAlt className='skills__details-icon'/>
              <div>
                <h4>Solidworks</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills__details'>
              <BiCodeAlt className='skills__details-icon'/>
              <div>
                <h4>Git & Github</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>  
        </div>
      </div>
    </section>
  )
}

export default Skills