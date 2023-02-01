import React from 'react'
import './Projects.css'
import IMG1 from'../../assets/hel.png'
import IMG2 from'../../assets/search_engine.png'
import IMG3 from'../../assets/ga_project.png'
import IMG4 from'../../assets/flatland_project.png'
import IMG5 from'../../assets/ai_chess.png'
import IMG6 from'../../assets/alien_invasion.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Helper4U Jobs Android App',
    github: 'https://drive.google.com/file/d/1nkxuRNTKp1asrV78aA3msGFRna72fuOw/view?usp=sharing',
    demo: 'https://play.google.com/store/apps/details?id=com.helper4u.h4ujobjs'
  },
  {
    id: 2,
    image: IMG2,
    title: 'DSA Search Engine',
    github: 'https://github.com/Abk2345/dsa_search_engine',
    demo: 'https://dsa-searchengine-project.herokuapp.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Bank lending Decision making using Genetic Algorithm',
    github: 'https://drive.google.com/drive/folders/1M5Le7rh1V3qK7-5lHhhTPeyXJOvA0-m8?usp=sharing',
    demo: 'https://drive.google.com/file/d/1_CjuNGcYI9gbBhkoIZYNNehPtF1Nmmwy/view?usp=sharing'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Efficient Scheduling of trains using Reinforcement Learning ',
    github: 'https://drive.google.com/file/d/19MH0XH80N0VxwoMY5VgBLnAr6hnaDI6X/view?usp=sharing',
    demo: 'https://drive.google.com/file/d/19MH0XH80N0VxwoMY5VgBLnAr6hnaDI6X/view?usp=sharing'
  },
  {
    id: 5,
    image: IMG5,
    title: 'AI-based Chess Player',
    github: 'https://github.com/Abk2345/Chess-AI',
    demo: 'https://onlinegdb.com/YBLMKHHpW'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Alien Invasion Interactive Game',
    github: 'https://github.com/Abk2345/ALIEN-INVASION',
    demo: 'https://github.com/Abk2345/ALIEN-INVASION/tree/master/Screenshots'
  }
]

const Projects = () => {
  return (
    <section id='projects'>
      <h5>Here are some of my amazing projects</h5>
      <h2>Projects</h2>

      <div className='container projects__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='projects__item'>
                <div className='projects__item-image'>
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="projects__item-cta">
                  <a href={github} className='btn' target='_blank'> Reference </a>
                  <a href={demo} className='btn btn-primary' target='_blank'> Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects