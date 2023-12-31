import React, { useState } from 'react';
import './styles.css'; 

const UserForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
     };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="label">
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input"
        />
      </label>
      <br />
      <label className="label">
        Phone:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="input"
        />
      </label>
      <br />
      <label className="label">
        Zipcode:
        <input
          type="text"
          name="zipcode"
          value={formData.zipcode}
          onChange={handleChange}
          required
          className="input"
        />
      </label>
      <br />
      <label className="label">
        Address:
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="input"
        />
      </label>
      <br />
      <label className="label">
        Google ID:
        <input
          type="text"
          name="googleId"
          value={formData.googleId}
          onChange={handleChange}
          required
          className="input"
        />
      </label>
      <br />
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
};

export default UserForm;
