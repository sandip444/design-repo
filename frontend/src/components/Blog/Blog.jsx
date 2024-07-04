import React, { useState, useEffect } from "react";
import "./Blog.css";
import { FaArrowRightLong } from "react-icons/fa6";
import axios from "axios";
import { Link } from "react-router-dom";
import { blog_list } from '../../assets/assets';

const Blog = () => {
  const [blogs, setBlogs] = useState(blog_list);

  useEffect(() => {
    axios.get("http://localhost:4000/blogs").then((res) => {
      const sortedBlogs = res.data.sort((a, b) => b._id.localeCompare(a._id));
      const recentBlogs = sortedBlogs.slice(0, 3);
      setBlogs(recentBlogs);
    });
  }, []);
  console.log(blogs)

  return (
    <div className="blog py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Blogs</h1>

      <div className="blog-container grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {blogs.map((item, index) => (
          <div
            className="blog-box bg-white rounded-3xl"
            key={index}
          >
            <div className="blog-imgHome mb-4">
              <img
                src={item.img}
                alt="images"
                className="w-[480px] h-40 object-cover rounded-t-lg"
              />
            </div>

            <div className="blog-flex flex justify-between items-center mb-4">
              <div className="professional flex gap-2">
                <button class="bg-student-bg  text-[#F79009] font-semibold py-1 px-5 hover:border-transparent rounded-full">
                <p className="text-sm">{item.students}</p>
                </button>
                <button class="bg-preceptor-bg text-[#12B76A] font-semibold py-1 px-5 border hover:border-transparent rounded-full">
                <p className="text-sm">{item.preceptor}</p>
                </button>
              </div>
              <div className="time">
                <p className="text-xs text-gray-600">{item.time} <span className="text-[10px]">min read</span></p>
              </div>
            </div>

            <div className="title">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <div
                className="description text-sm font-normal text-gray-700 mb-4"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
             <Link to={'/view_blog'}>Read more <FaArrowRightLong /></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
