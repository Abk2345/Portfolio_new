import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Education from './components/education/Education'
import Projects from './components/projects/Projects'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contacts />
        <Footer />
    </>
  )
}

export default App