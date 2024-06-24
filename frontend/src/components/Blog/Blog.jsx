import React from 'react';
import './Blog.css';
import { FaArrowRightLong } from "react-icons/fa6"
import { blog_list } from '../../assets/assets'

const Blog = () => {
  return (
    <div className="blog">
      <h1>Blogs</h1>

      <div className="blog-container">
        {blog_list.map((item, index) => (
          <div className="blog-box" key={index}>

            <div className="blog-img">
              <img src={item.img} alt="images" />
            </div>

            <div className="blog-flex">
              <div className="prefessional">
                <div className="student">
                  <p>{item.students}</p>
                </div>
                <div className="preceptor">
                  <p>{item.preceptor}</p>
                </div>
              </div>
              <div className="time">
                <p>{item.time}</p>
              </div>
            </div>

            <div className="title">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href="#">Read more <FaArrowRightLong /></a>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
