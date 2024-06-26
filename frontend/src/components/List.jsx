import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [editBlog, setEditBlog] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    img: ''
  });

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:4000/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('There was an error fetching the blogs!', error);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/blogs/${id}`);
      setBlogs(prevBlogs => prevBlogs.filter(blog => blog._id !== id));
    } catch (error) {
      console.error('There was an error deleting the blog!', error);
    }
  };

  const handleEdit = (blog) => {
    setEditBlog(blog._id);
    setFormData({
      title: blog.title,
      description: blog.description,
      img: blog.img
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:4000/blogs/${id}`, formData);
      setBlogs(prevBlogs => prevBlogs.map(blog => (blog._id === id ? { ...blog, ...formData } : blog)));
      setEditBlog(null);
      setFormData({
        title: '',
        description: '',
        img: ''
      });
    } catch (error) {
      console.error('There was an error updating the blog!', error);
    }
  };

  return (
    <div className="blog-list">
      <h2>Blog List</h2>
      {blogs.map(blog => (
        <div key={blog._id} className="blog-item">
          <img src={blog.img} alt={blog.title} className="blog-img" />
          <div className="blog-content">
            {editBlog === blog._id ? (
              <div className="edit-form">
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Title"
                />
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Description"
                />
                <input
                  type="text"
                  name="img"
                  value={formData.img}
                  onChange={handleChange}
                  placeholder="Image URL"
                />
                <button onClick={() => handleUpdate(blog._id)} className="update-button">Update</button>
              </div>
            ) : (
              <>
                <h3>{blog.title}</h3>
                <div className="blog-description" dangerouslySetInnerHTML={{ __html: blog.description }} />
                <div className="blog-actions">
                  <button onClick={() => handleEdit(blog)} className="edit-button">Edit</button>
                  <button onClick={() => handleDelete(blog._id)} className="delete-button">Delete</button>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
