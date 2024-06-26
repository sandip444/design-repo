import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import './Admin.css';
import 'react-quill/dist/quill.snow.css';
import BlogList from './List';

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
    } catch (error) {
      console.error('There was an error adding the blog!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3>Image URL:</h3>
        <input
          type="text"
          name="img"
          value={blog.img}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Students:</label>
        <input
          type="text"
          name="students"
          value={blog.students}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Preceptor:</label>
        <input
          type="text"
          name="preceptor"
          value={blog.preceptor}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Time:</label>
        <input
          type="text"
          name="time"
          value={blog.time}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={blog.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <ReactQuill
          value={blog.description}
          onChange={handleDescriptionChange}
        />
      </div>
      <button type="submit">Add Blog</button>
      <BlogList />
    </form>
  );
};

export default BlogForm;
