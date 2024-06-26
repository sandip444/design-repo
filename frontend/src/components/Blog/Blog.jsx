import React, { useState, useEffect } from 'react';
import './Blog.css';
import { FaArrowRightLong } from "react-icons/fa6";
import axios from 'axios';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/blogs')
      .then(res => setBlogs(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="blog">
      <h1>Blogs</h1>

      <div className="blog-container">
        {blogs.map((item, index) => (
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
              <div className="description" dangerouslySetInnerHTML={{ __html: item.description }} />
              <a href="#">Read more <FaArrowRightLong /></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
