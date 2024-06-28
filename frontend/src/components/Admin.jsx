import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import BlogList from './List';
import './Admin.css'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BlogForm = () => {
  const [blog, setBlog] = useState({
    img: '',
    students: '',
    preceptor: '',
    time: '',
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleDescriptionChange = (value) => {
    setBlog({ ...blog, description: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/blogs', blog);
      console.log('Blog added:', response.data); 
      toast.success('Blog posted successfully!', {
        position: toast.POSITION.TOP_BOTTOM
      });
     
    } catch (error) {
      console.error('Error adding blog:', error);
      toast.error('Failed to post blog. Please try again later.', {
        position: toast.POSITION.TOP_BOTTOM
      });
    }
  };

  return (
    <>
  <div>
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-semibold mb-2 block">Image URL:</label>
            <input
              type="text"
              name="img"
              value={blog.img}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="font-semibold mb-2 block">Students:</label>
            <input
              type="text"
              name="students"
              value={blog.students}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="font-semibold mb-2 block">Preceptor:</label>
            <input
              type="text"
              name="preceptor"
              value={blog.preceptor}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="font-semibold mb-2 block">Time:</label>
            <input
              type="text"
              name="time"
              value={blog.time}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
            <label className="font-semibold mb-2 block">Title:</label>
          <div className="md:col-span-2">
            <input
              type="text"
              name="title"
              value={blog.title}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="font-semibold mb-2 block">Description:</label>
          <ReactQuill
            value={blog.description}
            onChange={handleDescriptionChange}
            className="bg-white p-2 rounded"
          />
        </div>
        <div className="mt-4">
          <button type="submit" className="bg-black text-white px-5 py-1 rounded-full">
            Add Blog
          </button>
        </div>
      </form>
      <BlogList />
    </div>
    <ToastContainer />
    </>
  );
};

export default BlogForm;

  