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

const Home = () => {
  return (
    <div>
      <Header />
      <Highlights />
      <Task />
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
