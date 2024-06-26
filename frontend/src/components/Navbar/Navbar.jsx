import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { MdArrowForwardIos } from "react-icons/md";

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div>
      <nav>
        <div className="logo">
          <img src={assets.logo} alt="Logo" />
        </div>

        <ul>
          <p>All Categories</p>
          
          <li onMouseEnter={() => handleMouseEnter('Globe')}
            onMouseLeave={handleMouseLeave}>
            <img src={hoveredItem === 'Globe' ? assets.Globe_icon_color : assets.Globe_icon_black}
              alt="Globe"/>
          </li>

          <li onMouseEnter={() => handleMouseEnter('Behance')}
            onMouseLeave={handleMouseLeave}>
            <img src={hoveredItem === 'Behance' ? assets.Behance_icon_color : assets.Behance_icon_black}
              alt="Behance"/>
          </li>

          <li onMouseEnter={() => handleMouseEnter('Email')}
            onMouseLeave={handleMouseLeave}>
            <img src={hoveredItem === 'Email' ? assets.Email_icon_color : assets.Email_icon_black}
              alt="Email"/>
          </li>

          <li>
            <button className='nav-btn'>Schedule a call <span><MdArrowForwardIos /></span></button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
