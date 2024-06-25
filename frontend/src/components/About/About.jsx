import React from 'react'
import './About.css'
import { assets } from '../../assets/assets'

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="about-container">
        <div className="about-left">
          <h2>Jay Vaghasiya - UI-UX Designer</h2>
          <p>Jay is an accomplished Senior UX Designer with more than 5+ years of experience in the fields of web, US, and UI design.</p>
          <p>My goal is to create digital experiences that delight users and drive business success.</p>


          <div className="about-icons">
            <p><span>5+</span>Years Experience</p>
            <p>Fast Delivery</p>
          </div>

          <div className="about-link">
            <a href="">Linkedin</a>
            <a href="">Dribble</a>
            <a href="">Upwork</a>
          </div>
        </div>

        <div className="about-right">
          <div className="about-img">
            <img src={assets.main} alt="img" />
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
