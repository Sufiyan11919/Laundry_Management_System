import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    zipcode: '',
    address: '',
    googleId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('api call', formData);
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    navigate('/main');
  };

  return (
    <div className="container">
      <h1 className="heading">Welcome to Our Laundry Services</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="input" />
        </label>
        <br />
        <label className="label">
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="input" />
        </label>
        <br />
        <label className="label">
          Zipcode:
          <input type="text" name="zipcode" value={formData.zipcode} onChange={handleChange} required className="input" />
        </label>
        <br />
        <label className="label">
          Address:
          <textarea name="address" value={formData.address} onChange={handleChange} required className="input" />
        </label>
        <br />
        <label className="label">
          Google ID:
          <input type="text" name="googleId" value={formData.googleId} onChange={handleChange} required className="input" />
        </label>
        <br />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
