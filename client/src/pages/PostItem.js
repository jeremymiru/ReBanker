import React, { useState } from 'react';
import api from '../services/api';

function PostItem() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    image: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/items', formData);
      alert('Item posted successfully!');
      setFormData({ title: '', category: '', image: '', description: '' });
    } catch (err) {
      console.error(err);
      alert('Error posting item.');
    }
  };

  return (
    <section style={styles.container}>
      <h1>Post an Item</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Title:</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        
        <label>Category:</label>
        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <label>Image (URL):</label>
        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

         <label>Suggested use:</label>
        <textarea
          name="use"
          value={formData.use}
          onChange={handleChange}
          required
        />
        
        <button type="submit">Post</button>
      </form>
    </section>
  );
}

const styles = {
  container: {
    padding: '2rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    maxWidth: '400px'
  }
};

export default PostItem;
