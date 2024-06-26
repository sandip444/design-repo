import React from "react";
import "./About.css";
import { assets } from "../../assets/assets";
import { BiSolidTimer } from "react-icons/bi";
import { MdComputer } from "react-icons/md";

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="about-container">
        <div className="about-left">
          <h2 className="text-3xl">Jay Vaghasiya - UI-UX Designer</h2>
          <p className="text-lg font-inter">
            Jay is an accomplished Senior UX Designer with more than 5+ years of
            experience in the fields of web, US, and UI design.
          </p>
          <p className="text-lg font-inter">
            My goal is to create digital experiences that delight users and
            drive business success.
          </p>
          <div className="about-icons flex flex-row items-center">
            <div className="p-3 rounded-full flex items-center space-x-2">
              <MdComputer className="text-white bg-[#1F232F] text-xl w-8 h-8 rounded-full p-2" />
              <span className="text-lg font-inter">5+ Years Experience</span>
            </div>
            <div className="p-3 rounded-full flex items-center space-x-2 ml-4">
              <BiSolidTimer className="text-white text-xl bg-[#1F232F] w-8 h-8 rounded-full p-[5px]" />
              <span className="text-lg font-inter">Fast Delivery</span>
            </div>
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
  );
};

export default About;
