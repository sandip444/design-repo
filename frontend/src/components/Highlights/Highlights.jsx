import React, { useState } from 'react';
import './Highlights.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { portfolio_list } from '../../assets/assets';

const Highlights = () => {
  const [filter, setFilter] = useState('All');

  // Handle filter change
  const handleFilterChange = (category) => {
    setFilter(category);
  };

  // Filter the portfolio list based on the selected category
  const filteredList = filter === 'All' ? portfolio_list : portfolio_list.filter(item => item.category === filter);

  return (
    <div className="highlights">
      <h1>Portfolio Highlights</h1>

      <ul className="filter-list">
        {['All', 'Website', 'Mobile', 'Web App', 'Wireframes'].map(category => (
          <li 
            key={category} 
            onClick={() => handleFilterChange(category)}
            className={`filter-button ${filter === category ? 'active' : ''}`}
          >
            {category}
          </li>
        ))}
      </ul>

      <div className="highlights-container">
        {filteredList.map((item, index) => (
          <div className="highlights-box" key={index}>
            <div className="">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="highlights-title">
              <h2>{item.name}</h2>
              <p><FaArrowRightLong /></p>
            </div>
          </div>
        ))}
      </div>

      <button className="view-all-button">View all Portfolio</button>
    </div>
  );
};

export default Highlights;
