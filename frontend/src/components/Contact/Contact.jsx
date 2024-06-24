import React from 'react';
import './Contact.css';
import { MdArrowForwardIos } from "react-icons/md";
import FeedbackForm from '../Feedback/Feedback';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-flex">
        <div className="contact-left">
          <FeedbackForm />
        </div>
        <div className="contact-right">
          <form>
            <div className="multi-fields">
              <div className="form-group">
                <input type="text" id="firstName" name="firstName" required placeholder=" " />
                <label htmlFor="firstName">First Name</label>
              </div>
              <div className="form-group">
                <input type="text" id="lastName" name="lastName" required placeholder=" " />
                <label htmlFor="lastName">Last Name</label>
              </div>
            </div>
            <div className="multi-fields">
              <div className="form-group">
                <input type="email" id="email" name="email" required placeholder=" " />
                <label htmlFor="email">Email</label>
              </div>
              <div className="form-group">
                <input type="text" id="phone" name="phone" required placeholder=" " />
                <label htmlFor="phone">Phone Number</label>
              </div>
            </div>
            <div className="form-group">
              <textarea id="description" name="description" required placeholder=" "></textarea>
              <label htmlFor="description">Description</label>
            </div>

            <button type="submit">Submit <span><MdArrowForwardIos /></span></button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
