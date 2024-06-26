import React from 'react';
import './Header.css';
import { MdArrowForwardIos } from 'react-icons/md';

const Header = () => {
  return (
    <div className="header">
      <div className="header-flex">
        <img src="" alt="" />
        <div className="header-content">
          <h1 className='text-[62px] px-8'>Get a Dedicated Full-Time Autonomous Product Designer</h1>
          <h3 className='text-[24px] text-[#6F6C90] text-center mx-auto'>Create intuitive and visually compelling interfaces that enhance user experience and engagement. Your designs will shape how users interact with our products, making every click seamless and enjoyable.</h3>
        <div className="button-container pt-5">
          <button className=''>Contact Us <span style={{paddingLeft:"10px"}}><MdArrowForwardIos /></span></button>
        </div>
        </div>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Header;

