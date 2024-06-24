import React from 'react';
import './Highlights.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { portfolio_list } from '../../assets/assets';

const Highlights = () => {
  return (
    <div className="highlights">
      <h1>Portfolio Highlights</h1>

      <ul>
        <li>All</li>
        <li>Website</li>
        <li>Mobile</li>
        <li>Web App</li>
        <li>Wireframes</li>
      </ul>

      <div className="highlights-container">
        {portfolio_list.map((item, index) => (
          <div className="highlights-box" key={index}>
            <div className="">
              <img src={item.img} alt="img1" />
            </div>
            <div className="highlights-title">
              <h2>{item.name}</h2>
              <p><FaArrowRightLong /></p>
            </div>
          </div>
        ))}
      </div>

      <button>View all Portfolio</button>
    </div>
  );
};

export default Highlights;
