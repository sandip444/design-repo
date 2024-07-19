import React from 'react';
import './Header.css';
import { MdArrowForwardIos } from 'react-icons/md';
import HeaderLeft from "../../assets/header-left.png";
import HeaderRight from "../../assets/header-right.png";
import Icon1 from "../../assets/icon1.png"
import Icon2 from "../../assets/icon2.png"
import Icon3 from "../../assets/icon3.png"
import Icon4 from "../../assets/icon4.png"
import HeaderRating from "../../assets/headerRating.png";
import Starbg from "../../icons/stars.svg";
import RightArrow from "../../icons/FocusRight.svg";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">

            <div className="flex items-center justify-center mb-8 md:mb-0">
              <div className="header-content text-center">
                <img src={HeaderRating} alt="" className="w-12 h-12 widthInc mx-auto object-contain md:w-24 md:h-20 lg:w-32 lg:h-28 " />

                <h1 className='text-3xl md:text-5xl font-bold mb-4 md:mb-6 FontStyle' style={{lineHeight:"86.8px",color: "rgba(17, 21, 34, 1)"}} >Get a Dedicated Full-Time Autonomous Product Designer</h1>
                <p className=' md:text-2xl text-[#6F6C90] text-center mx-auto mb-4 md:mb-6 px-5 headerpara'>Create intuitive and visually compelling interfaces that enhance user experience and engagement. Your designs will shape how users interact with our products, making every click seamless and enjoyable.</p>
                <img src={HeaderLeft} alt="header" className="md:float-left mr-8 mb-8 md:mb-0 hidden sm:block hiddenIMages" />
                <img src={HeaderRight} alt="image" className="md:float-right ml-8 mb-8 md:mb-0 hidden sm:block hiddenIMages" />
                <div className="button-container flex justify-center md:justify-center" 
                // style={{marginTop:"9%"}}
                >
                  <button className="nav-btn pr-[5px] pl-4 py-2 rounded-full flex items-center font-red-rose" style={{color:"rgb(255,255,255,1)",fontSize:"16px",lineHeight:"20px",fontWeight:"700px",display:"flex",gap:"6px", backgroundImage:`url(${Starbg})`}}>
                    Contact Us  <img src={RightArrow} style={{ stroke: "#FFF", }} />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[-25px] mb-4">
        <button style={{fontWeight:"400",borderRadius:"40px",display:"flex",gap:"12px",justifyContent:"center",alignItems:"center"}} className="font-bold font-red-rose py-2 px-5 rounded-full available-button text-uppercase">
          AVAILABLE FOR
          <div className="IconLogos">
          <div className="Icon2"><img src={Icon2} alt="" /></div>
         <div className="Icon4"> <img src={Icon4} alt="" /></div>
         <div className="Icon1"><img src={Icon1} alt="" /></div>
         <div className="Icon3">
         <img src={Icon3} alt="" />
         </div>
          </div>
          {/* mx-2 h-5 w-4 */}
        </button>
      </div>
    </>
  );
}

export default Header;
