import React, { useState } from "react";
import "./Highlights.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { portfolio_list } from "../../assets/assets";

const Highlights = () => {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredList =
    filter === "All"
      ? portfolio_list
      : portfolio_list.filter((item) => item.category === filter);

  return (
    <div className="highlights mb-4">
      <h1 className="text-[52px] text-center mx-auto">Portfolio Highlights</h1>

      <ul className="filter-list">
        {["All", "Website", "Mobile", "Web App", "Wireframes"].map(
          (category) => (
            <li
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`filter-button ${filter === category ? "active" : ""}`}
            >
              {category}
            </li>
          )
        )}
      </ul>

      <div className="highlights-container">
        {filteredList.map((item, index) => (
          <div className="highlights-box" key={index}>
            <div className="">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="highlights-title">
              <h2>{item.name}</h2>
              <p>
                <FaArrowRightLong />
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative">
        <button className="view-all-button bg-black text-white py-2 px-4 rounded-full relative z-10">
          View all Portfolio
        </button>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-52 bg-gray-300 rounded-full opacity-50 z-0 py-9"></div>
      </div>
    </div>
  );
};

export default Highlights;
