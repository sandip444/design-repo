import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import Highlights from '../Highlights/Highlights'
import Task from '../Task/Task'
import Digital from '../Digital/Digital'
import About from '../About/About'
import Testimional from '../Testimional/Testimional'
import Blog from '../Blog/Blog'
import Question from '../Question/Question'
import Contact from '../Contact/Contact'
import Services from '../Services/Services'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Header />
      <Highlights />
      <Task />
      <Services/>
      <Digital />
      <About />
      <Testimional />
      <Blog />
      <Question/>
      <Contact/>
    </div>
  )
}

export default Home
