import React from 'react'
import './Header.css'
import { MdArrowForwardIos } from "react-icons/md"

const Header = () => {
  return (
    <div className="header">
        <div className="header-flex">
            <img src="" alt="" />
            <hr />
            <img src="" alt="" />
        </div>

        <h1>Get a Dedicated Full-Time Autonomous Product Designer</h1>

        <h3>Create intuitive and visually compelling interfaces that enhace user experience and engagement. Your designs will shape how users interact with our products, making every click seamless and enjoyale.</h3>

        <button>Contact Us <span><MdArrowForwardIos /></span></button>
    </div>
  )
}

export default Header
