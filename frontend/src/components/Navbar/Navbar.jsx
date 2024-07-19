import React, { useState } from "react";
import { assets } from "../../assets/assets";
// import { MdArrowForwardIos } from "react-icons/md";
import { CgMenuMotion } from "react-icons/cg";
import { RiCloseLargeLine } from "react-icons/ri";
import { useNavigate} from "react-router-dom"
// import { createBrowserHistory } from 'history';
import "./Navbar.css";
import Starbg from "../../icons/stars.svg";
import RightArrow from "../../icons/FocusRight.svg";

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const redirect = useNavigate()

  // const history = createBrowserHistory();

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="w-full bg-white" style={{height:"97px",borderTop:"0px solid rgba(230, 230, 230, 1)",display:"flex",justifyContent:"space-between",width:"90%",margin:"0 auto"}}>
      <nav className="flex items-center justify-between p-4 md:p-6" style={{display:"flex",alignItems:"center",marginTop:"7px"}}>
        <div onClick={()=>{redirect('/home')}} className="logo flex-shrink-0">
          <img src={assets.logo} alt="Logo" className="h-10 md:h-12" style={{width:"41px",height:"38px",cursor:"pointer"}}  />
        </div>
    <div className="NavIcons">

   
        <div className="md:hidden">
          {!isDrawerOpen && (
            <button
              onClick={toggleDrawer}
              className="btn-menu-drawer text-xl focus:outline-none flex items-center justify-center h-10 w-10"
            >
              <CgMenuMotion className="transition-transform transform rotate-0" />
            </button>
          )}
        </div>

        <ul className="hidden md:flex items-center space-x-4 text-sm md:text-base" style={{height: "50px",marginTop:"7px"}}>
          <div className="AllCateg font-red-rose">All Categories</div>
            <div className="NavLogos">
          <li
            onMouseEnter={() => handleMouseEnter("Globe")}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={
                hoveredItem === "Globe"
                  ? assets.Globe_icon_color
                  : assets.Globe_icon_black
              }
              alt="Globe"
              className="h-6 w-6 md:h-8 md:w-8"
            />
          </li>

          <li
            onMouseEnter={() => handleMouseEnter("Behance")}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={
                hoveredItem === "Behance"
                  ? assets.Behance_icon_color
                  : assets.Behance_icon_black
              }
              alt="Behance"
              className="h-6 w-6 md:h-8 md:w-8"
            />
          </li>

          <li
            onMouseEnter={() => handleMouseEnter("Email")}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={
                hoveredItem === "Email"
                  ? assets.Email_icon_color
                  : assets.Email_icon_black
              }
              alt="Email"
              className="h-6 w-6 md:h-8 md:w-8"
            />
          </li>
          </div>
          <div  height="50px" style={{display:"flex",justifyContent:"space-between",padding:"1px",borderRadius:"50px",backgroundColor:"#111522"}}>
            <button className="nav-btn pr-[5px] pl-4 py-2 rounded-full flex items-center font-red-rose" style={{color:"rgb(255,255,255,1)",fontSize:"16px",lineHeight:"20px",fontWeight:"700px",display:"flex",gap:"6px", backgroundImage:`url(${Starbg})`}}>
              Schedule a call <img src={RightArrow} style={{ stroke: "#FFF", }} />
            </button>
          </div>
        </ul>
        </div>
      </nav>

      {isDrawerOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg p-2 z-50">
            <div className="flex justify-between items-center mb-4">
              <div className="logo flex-shrink-0 mt-3">
                <img src={assets.logo} alt="Logo" className="h-10 md:h-12" />
              </div>
              <button
                onClick={closeDrawer}
                className="btn-close-drawer text-xl focus:outline-none mt-3"
              >
                <RiCloseLargeLine />
              </button>
            </div>

            <div className="flex flex-col space-y-4">
              <p className="">All Categories</p>
              <ul className="flex flex-row space-x-4">
                <li
                  onMouseEnter={() => handleMouseEnter("Globe")}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={
                      hoveredItem === "Globe"
                        ? assets.Globe_icon_color
                        : assets.Globe_icon_black
                    }
                    alt="Globe"
                     className="h-8 w-8 md:h-10 md:w-10"
                  />
                </li>
                <li
                  onMouseEnter={() => handleMouseEnter("Behance")}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={
                      hoveredItem === "Behance"
                        ? assets.Behance_icon_color
                        : assets.Behance_icon_black
                    }
                    alt="Behance"
                     className="h-8 w-8 md:h-10 md:w-10"
                  />
                </li>
                <li
                  onMouseEnter={() => handleMouseEnter("Email")}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={
                      hoveredItem === "Email"
                        ? assets.Email_icon_color
                        : assets.Email_icon_black
                    }
                    alt="Email"
                     className="h-8 w-8 md:h-10 md:w-10"
                  />
                </li>
              </ul>
              <div>
              <button style={{padding:"4px 4px 4px 16px",backgroundColor:"#111522",fontSize:"16px",lineHeight:"20px",fontWeight:"700px",backgroundImage:`url(${Starbg})`}}>
                Schedule a call
                <span className="ml-2">
                  <MdArrowForwardIos />
                </span>
              </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
