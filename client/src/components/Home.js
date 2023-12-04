import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';

const Home = () => {
const [user, setUser] = useState(null);
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    googleId: '',
    name: '',
    phone: '',
    zipcode: '',
    address: '',
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
      const response = axios.post('https://laundrymanagementsystembackend.ue.r.appspot.com/api/UserInfo/saveUserInfo', formData);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error posting data:', error);
    }
    // try {
    //   const response = await axios.post('api call is here', formData);
    //   console.log('Form submitted successfully:', response.data);
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    // }
    navigate('/main', { state: { orderDetails: formData } });
    // navigate('/main');
  };

  function handleLogin(user){
    setUser(user);
  }

  useEffect(() => {
    if (user) {
      setFormData((prevData) => ({
        ...prevData,
        googleId: user.uid,
      }));
    }
  }, [user]); 

  return (
    <div className="container">
      <LoginForm LoginEvent={handleLogin}/>
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
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
