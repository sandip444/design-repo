import React, { useState } from "react";
import "./Contact.css";
import { MdArrowForwardIos } from "react-icons/md";
import FeedbackForm from "../Feedback/Feedback";
import axios from "axios";
import Starbg from "../../icons/stars.svg";
import contactimage from "../../icons/Contact Us.svg";
import DescriptionBox from './DescriptionBox'; 
import RightArrow from "../../icons/FocusRight.svg";



const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/send", formData);
      alert("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        description: "",
      });
    } catch (error) {
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="contact" style={{backgroundColor:"rgba(255, 255, 255, 1)"}}>
      <div className="contact-flex">
        <div className="contact-left">
          <FeedbackForm />
        </div>
        <div  className="contact-right">
          <form onSubmit={handleSubmit}>
            <div className="multi-fields">
              <div className="form-group font-inter">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  placeholder=" "
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <label htmlFor="firstName">First Name</label>
              </div>
              <div className="form-group font-inter">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  placeholder=" "
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <label htmlFor="lastName">Last Name</label>
              </div>
            </div>
            <div className="multi-fields">
              <div className="form-group font-inter">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="form-group font-inter ">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  required
                  placeholder=" "
                  value={formData.phone}
                  onChange={handleChange}
                />
                <label htmlFor="phone">Phone Number</label>
              </div>
            </div>
            <div className="HtInc form-group font-inter" style={{height:"130px !important"}}>
              <textarea
                id="description"
                name="description"
                required
                placeholder=" "
                value={formData.description}
                onChange={handleChange}
                ></textarea>
              <label htmlFor="description">Description</label>
            </div>
                <DescriptionBox/>
            <div className="button-container" style={{marginTop:"40px"}}>
              <button type="submit" className="nav-btn pr-[5px] pl-4 py-2 rounded-full flex items-center font-red-rose" style={{color:"rgb(255,255,255,1)",fontSize:"16px",lineHeight:"20px",fontWeight:"700px",display:"flex",gap:"6px", backgroundImage:`url(${Starbg})`}}>
                Submit{" "} <img src={RightArrow} style={{ stroke: "#FFF", }} />
                {/* <span>
                  <MdArrowForwardIos />
                </span> */}
              </button>
            </div>
          </form>
        </div>
      <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
      <img src={contactimage}></img>
      </div>
      </div>
    </div>
    
  );
  
};

export default Contact;
