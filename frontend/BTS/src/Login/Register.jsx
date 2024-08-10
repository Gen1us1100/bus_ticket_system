import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';
import vid from '../Assets/xyz.gif';
import 'boxicons';

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/signup/', {
        username: formData.fullName,
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 201) {
        toast.error('Registration successful! You can now log in.');
        console.log('Registration successful, navigating...');
        navigate('/nav');
      }
    } catch (error) {
      toast.error('Registration failed. Please try again.');
      console.error('There was an error!', error);
    }
  };

  return (
    <div className="container">
      <div className="box">
        <div className="welcome">Welcome to BTS!</div>
        <div className="gif">
          <img src={vid} alt="loading..." />
        </div>

        <div className="login">
          <form onSubmit={handleSubmit}>
            <div className="input">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <box-icon name="user-circle" type="solid" color="#71c563"></box-icon>
            </div>
            <div className="input">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <box-icon name="user-circle" type="solid" color="#71c563"></box-icon>
            </div>
            <div className="input">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <box-icon type="solid" name="lock-alt" color="#71c563"></box-icon>
            </div>
            <div className="input">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <box-icon type="solid" name="lock-alt" color="#71c563"></box-icon>
            </div>
            <div className="input">
              <button type="submit" className="btn" >
                SIGN UP
              </button>
            </div>
            <div className="sign-up">
              <p>
                Already have an account?<br />
                <a className="link" onClick={() => navigate('/')}>
                  Sign In
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer  />
    </div>
  );
}
