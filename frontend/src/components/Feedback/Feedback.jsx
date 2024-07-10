import React from 'react'
import './Feedback.css'
import {assets} from '../../assets/assets.js';
import Linkedinimg from "../../icons/linkedinicon.png";
import upimg from "../../icons/up.png";
import instaimg from "../../icons/instagram-icon.png"
import twitterimg from "../../icons/twitter-icon.png"
import beimg from "../../icons/Be.png";
// import jvimg from "../../icons/Jv.png"
// import JVImage from "../../icons/JVicon.svg";
import ballimg from "../../icons/pinkball.png"
import formicon from "../../icons/Illustration.svg";
// import LinkedInIcon from 'path/to/linkedin-icon.png';
// import BehanceIcon from 'path/to/behance-icon.png';
// import UpworkIcon from 'path/to/upwork-icon.png';
// import TwitterIcon from 'path/to/twitter-icon.png';
// import InstagramIcon from 'path/to/instagram-icon.png';
// import JVIcon from 'path/to/jv-icon.png'; 

const Feedback = () => {
  return (

    <section className="contact-section">
    <div className="TextContainer">
    Fill out the form below to get in touch with us.
    </div>
    <div className="icons-container">
      {/* <div className="icon-wrapper">
        <img src={Linkedinimg} alt="Dribbble" className="icon" />
      </div>
      <div className="icon-wrapper">
        <img src={upimg} alt="LinkedIn" className="icon" />
      </div>
      <div className="icon-wrapper">
        <img src={instaimg} alt="Behance" className="icon" />
      </div> */}
       {/* <img src={assets.Ellipse} alt="" style={{"z-index": -0.1}}/> */}
      {/* <div className="icon-wrapper">
        <img src={jvimg} alt="JV" className="central-icon" />
      </div>
      <div className="icon-wrapper">
        <img src={ballimg} alt="Upwork" className="icon" />
      </div>
      <div className="icon-wrapper">
        <img src={beimg} alt="Twitter" className="icon" />
      </div>
      <div className="icon-wrapper">
        <img src={twitterimg} alt="Instagram" className="icon" />
      </div> */}
      <div className="centercircle"></div>
      <img src={formicon} ></img>
    </div>
  </section>
    // <section className="contact-section">
    //   <h2>Fill out the form below to get in touch with us.</h2>
    //   <div className="icons-container">
    //     <img src={assets.Globe_icon_black} alt="Dribbble" className="icon" />
    //     <img src={assets.Behance_icon_color} alt="LinkedIn" className="icon" />
    //     <img src={assets.logo} alt="JV" className="central-icon" />
    //     <img src={assets.Email_icon_color} alt="Behance" className="icon" />
    //     <img src={assets.Instagram_icon_color} alt="Upwork" className="icon" />
    //     <img src={assets.upwork} alt="Twitter" className="icon" />
    //     <img src={assets.Globe_icon_black} alt="Instagram" className="icon" />
    //   </div>
    // </section>
  )
}

export default Feedback
