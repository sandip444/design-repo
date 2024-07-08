import React from 'react';
import './Footer.css';
import footerLogo from "../../icons/footer logo.png"
import footerIcons from "../../icons/footer right icons.png"
import FooterBottomicons from "../../icons/footer bottom icons.png"
import emailIcon from "../../icons/sms.svg";
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-left">
          <div className="logo">
            {/* <h2>JV</h2> */}
            <img src={footerLogo} alt="footericon"></img>
          </div>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <div>
          <div className="email">
            <img src={emailIcon} style={{ stroke: "#FFF", }}></img>
            <a href="mailto:jayvaghasiya5232@gmail.com">jayvaghasiya5232@gmail.com</a>
          </div>
          </div>
          <div className="brand">
            <ul>
              <li><img src={footerIcons} alt="logos"></img></li>
              {/* <li>brand</li>
              <li>brand</li> */}
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-left">
          <p>&copy; 2024 Jay Vagasiya All Rights Reserved.</p>
        </div>
        <div className="footer-right">
          <p><img src={FooterBottomicons} alt="socialmediaicons"></img></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
