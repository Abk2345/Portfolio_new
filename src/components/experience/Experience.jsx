import React from 'react'
import './Experience.css'
import {SiNvidia} from 'react-icons/si'
import {BiFootball} from 'react-icons/bi'
import {RiTeamLine} from 'react-icons/ri'

const Experience = () => {
  return (
    <section id='experience'>
        <h5>The Only Source of Knowledge is Experience</h5>
        <h2>Work Experience</h2>
        <div className="experience__container">
          <div>
            <article className='experience__details'>
              <BiFootball className='experience__details-icon'/>
              <div>
                <h4>Scheduling trains using RL | Tata Consultancy Services</h4>
                <h5 className='text-light'>Summer Internship [9 May 2022 - 15 July 2022]</h5>
                <small className='text-light'>
                  <p className='work__details'>
                  •Worked on creating an efficient <b>scheduling system</b> for a real-like railway station using python on Flatland 3.0 simulation environment<br></br>
                  •Applied heuristic algorithms like earliest arrival, shortest path and amalgamation of the two to minimize total delay and make-span time<br></br>
                  •Implemented the <b>Duelling Deep Queue Network architecture </b> which reduced total delay and make-span time by 20% over other methods <br></br>
                  </p>
                </small>
              </div>
            </article>
          </div>
          <div>
            <article className='experience__details'>
              <BiFootball className='experience__details-icon'/>
              <div>
                <h4>H4U Jobs Android App Development | Helper4U</h4>
                <h5 className='text-light'>Software Development Internship [Oct 2020 - Feb 2021]</h5>
                <small className='text-light'>
                  <p className='work__details'>
                  •Worked in a 3 member team to develop an application (1500+ daily active users) to help domestic helpers connect with employers <br></br>
•Developed the front-end of the android application using Java with the backend server in PHP, which is hosted on AWS server<br></br>
•Created features like notifications using Firebase Cloud Messaging, visiting card, communities, and trainings for tutorials and certifications<br></br>
                  </p>
                </small>
              </div>
            </article>
          </div>
          
        </div>
    </section>
  )
}

export default Experience