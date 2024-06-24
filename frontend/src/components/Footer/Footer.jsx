import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-left">
          <div className="logo">
            <h2>JV</h2>
          </div>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <div className="email">
            <a href="mailto:jayvaghasiya5232@gmail.com">jayvaghasiya5232@gmail.com</a>
          </div>
          <div className="brand">
            <ul>
              <li>brand</li>
              <li>brand</li>
              <li>brand</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-left">
          <p>&copy; 2024 Jay Vagasiya. All Rights Reserved.</p>
        </div>
        <div className="footer-right">
          <p>icons</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
