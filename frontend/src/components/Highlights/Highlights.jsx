import React, { useState, useEffect } from "react";
import "./Highlights.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { portfolio_list } from "../../assets/assets";
import Hireme from "../../assets/Hire_Me.png"

const Highlights = () => {
  const [filter, setFilter] = useState("All");
  const [portfolio, setPortfolio] = useState(portfolio_list)
  useEffect(() => {
    const updatedData = portfolio_list.map(item => {
      let category = '';
      switch (item.id) {
        case 1:
          category = 'Mobile';
          break;
        case 2:
          category = 'Website';
          break;
        case 3:
          category = 'Mobile';
          break;
        case 4:
          category = 'Wireframes';
          break;
        case 5:
          category = 'Web App';
          break;
        case 6:
          category = 'Mobile';
          break;
        default:
          category = 'other';
      }
      return {
        ...item,
        category
      };
    });
    setPortfolio(updatedData);
  }, []);
  console.log(portfolio)


  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredList =
    filter === "All"
      ? portfolio_list
      : portfolio.filter((item) => item.category === filter);
  // console.log(portfolio_list)
  return (
    <>
      <div className="flex flex-col items-center justify-center heading">
        <img src={Hireme} alt="Services" className="mb-2 mt-5" />
        <h1 className="text-[52px] font-semibold text-black">
          Portfolio Highlights
        </h1>
      </div>
      <div className="highlights mb-4">
        <ul className="filter-list flex flex-wrap justify-center space-x-2 md:space-x-4 mt-4">
          {["All", "Website", "Mobile", "Web App", "Wireframes"].map((category) => (
            <li
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`filter-button cursor-pointer px-3 md:px-4 py-2 rounded-full text-xs md:text-sm lg:text-base my-2 ${filter === category ? "active" : ""}`}
            >
              {category}
            </li>
          ))}
        </ul>

        <div className="highlights-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredList.map((item, index) => (
            <div className="highlights-box" key={index}>
              <div className="overflow-hidden rounded-lg">
                <img src={item.img} alt={item.name} className="w-full" />
              </div>
              <div className="highlights-title mt-2">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">
                  <FaArrowRightLong />
                </p>
              </div>
            </div>
          ))}


        </div>
        <div
          //  className="relative mt-[-30px]"
          style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}
        >
          <button
          // className="view-all-button bg-black text-white py-2 px-4 rounded-full relative z-10 mx-auto block md:inline-block"
          >
            View all Portfolio
          </button>
          <div
          // className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-52 bg-gray-300 rounded-full opacity-50 z-0 mt-[-70px] py-[32px] px-6"
          ></div>
        </div>

      </div>
    </>
  );
};

export default Highlights;
