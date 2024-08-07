import React from "react";
import "./About.css";
import { assets } from "../../assets/assets";
import Upwork from "../../icons/upwork.png"
import Dribble from "../../icons/dribble.png"
import Linkedin from "../../icons/linkedIn.png"
import { BiSolidTimer } from "react-icons/bi";
import { MdComputer } from "react-icons/md";
import YouChoiceIsBest from '../../assets/YourChoiceBest.png';
import CurvedLine from '../../assets/Line56.png'

const About = () => {
  return (
    <div className="about">
      <div><img className="YourChoice" src={YouChoiceIsBest} /></div>
      <div className="headAbout">About Me <span><img className="curvedClass" src={CurvedLine} /></span></div>
      <div className="about-container">
        <div className="about-left">
          <h2 className="text-3xl">Jay Vaghasiya - UI-UX Designer</h2>
          <p className="text-lg font-red-rose textColor" style={{fontWeight:"200",fontSize:"18px",lineHeight:"26px",color:"rgba(255, 255, 255, 0.7);"}}>
            Jay is an accomplished Senior UX Designer with more than 5+ years of
            experience in the fields of web, US, and UI design.
          </p>
          <p className="text-lg font-red-rose textColor" style={{}}>
            My goal is to create digital experiences that delight users and
            drive business success.
          </p>
          <div className="about-icons flex flex-col sm:flex-row items-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
            <div className="rounded-full flex items-center space-x-2">
              <MdComputer className="text-white bg-[#1F232F] text-xl w-8 h-8 rounded-full p-2" />
              <span className="text-md font-red-rose">5+ <span className="textColor" style={{color:"rgb(255,255,255,0.4"}}>Years Experience</span></span>
            </div>
            <div className="rounded-full flex items-center space-x-2">
              <BiSolidTimer className="text-white text-xl bg-[#1F232F] w-8 h-8 rounded-full p-[5px]" />
              <span className="text-md font-red-rose textColor" style={{color:"rgb(255,255,255,0.4"}}>Fast Delivery</span>
            </div>
          </div>

          <div className="about-link">
            <img src={Linkedin} className="about-image " alt="img" />
            <img src={Dribble} className="about-image " alt="img" />
            <img src={Upwork} className="about-image " alt="img" />
          </div>
        </div>

        <div className="about-right">
          <div className="about-img">
            <img src={assets.main} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
