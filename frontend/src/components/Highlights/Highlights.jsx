import React, { useState, useEffect } from "react";
import "./Highlights.css";
import { MdArrowForwardIos } from 'react-icons/md';
// import { FaArrowRightLong } from "react-icons/fa6";
import Arrow from "../../assets/portfolioArrow.png";
import { portfolio_list } from "../../assets/assets";
import Hireme from "../../assets/Hire_Me.png";
import Starbg from "../../icons/stars.svg";
import RightArrow from "../../icons/FocusRight.svg";

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
        <img src={Hireme} alt="Services" className="mt-5" width="94px" height="37px"/>
        <h1 className="Prtfoliotxt text-[52px] font-red-rose ">
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
            <div className="highlights-box" style={{border:"none"}} key={index}>
              <div className="overflow-hidden rounded-3xl" style={{width:"556px",height:"460px"}}>
                <img src={item.img} alt={item.name} className="w-full" />
              </div>
              <div className="highlights-title ">
              {/* mt-2 */}
                <h2 className="text-lg font-bold font-red-rose" style={{color: "#111522" , lineHeight:"33.6px"}}>{item.name}</h2>
                {/* <p className="text-gray-600">
                  <FaArrowRightLong />
                  
                </p> */}
                <div className="Arrow">
                <img src={Arrow}></img>
                  </div>
              </div>
            </div>
          ))}


        </div>
        <div className="" style={{ display: "flex", justifyContent: "center" }}>
        <div className="PortfolioBtn" 
          //  className="relative mt-[-30px]"
          style={{ display: "flex", justifyContent: "center" }}
        >
         <div>
         <button className="nav-btn pr-[5px] pl-4 py-2 rounded-full flex items-center font-red-rose" style={{color:"rgb(255,255,255,1)",fontSize:"16px",lineHeight:"20px",fontWeight:"700px",display:"flex",gap:"6px", backgroundImage:`url(${Starbg})`}}
          // className="view-all-button bg-black text-white py-2 px-4 rounded-full relative z-10 mx-auto block md:inline-block"
          >
            View all Portfolio
            <img src={RightArrow} style={{ stroke: "#FFF", }} /></button>
         </div>
          <div
          // className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-52 bg-gray-300 rounded-full opacity-50 z-0 mt-[-70px] py-[32px] px-6"
          ></div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Highlights;
