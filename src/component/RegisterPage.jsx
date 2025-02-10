import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registerpage.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    matriculationNumber: '',
    department: '',
    gender: '',
    phoneNumber: '',
    userName: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.surname) newErrors.surname = "Surname is required";
    if (!formData.matriculationNumber) newErrors.matriculationNumber = "Matriculation Number is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted successfully:', formData);
      setFormSubmitted(true);
      navigate('/'); // Redirect to home page (Frame6)
    }
  };

  return (
    <div className="register-page">
      <div className="frame-9">
        <img className="photo21" src="/photo21.jpg" alt="WhatsApp" />
        <div className="frame-2"></div>
      </div>
      <div className="rectangle-16"></div>
      <img className="photo21" src="/photo21.jpg" alt="Bells University logo" />
      <div className="bells-unversity-of-technlogy">BELLS UNIVERSITY OF TECHNOLOGY</div>
      <div className="only-the-best-is-good-for-bells">ONLY THE BEST IS GOOD FOR BELLS</div>
      <div className="rectangle-17"></div>
      <img className="photo2" src="/photo2.jpg" alt="Bells University" />

      <div className="registration-container">
        <form className="registration-form" onSubmit={handleSubmit}>
          <h1 className="form-title">Register</h1>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="surname">Surname</label>
            <input id="surname" type="text" name="surname" value={formData.surname} onChange={handleChange} placeholder="Enter your surname" />
            {errors.surname && <span className="error">{errors.surname}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="matriculationNumber">Matriculation Number</label>
            <input id="matriculationNumber" type="text" name="matriculationNumber" value={formData.matriculationNumber} onChange={handleChange} placeholder="Enter your matriculation number" />
            {errors.matriculationNumber && <span className="error">{errors.matriculationNumber}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="department">Department</label>
            <input id="department" type="text" name="department" value={formData.department} onChange={handleChange} placeholder="Enter your department" />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input id="phoneNumber" type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Enter your phone number" />
          </div>

          <div className="form-group">
            <label htmlFor="userName">Username</label>
            <input id="userName" type="text" name="userName" value={formData.userName} onChange={handleChange} placeholder="Enter your username" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input id="confirmPassword" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm your password" />
            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
          </div>

          <div className="button-group">
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>

        {formSubmitted && <p className="success-message">Form submitted successfully!</p>}
      </div>

      {/* Footer */}
      <div className="copyright-2024">
        © Copyright 2024 ICT Resource Center, Bells University of Technology, Ota
      </div>
      <div className="contact">Contact</div>
      <div className="tel">Tel: +234 8169629948</div>
      <div className="email">Email: danielomonigho062@gmail.com</div>
      <img className="screenshot" src="/images/screenshot.png" alt="Screenshot" />
      <div className="already-have-an-account">
        <span>Already have an account? </span>
        <span className="sign-in">Sign in</span>
      </div>
    </div>
  );
};

export default RegisterPage;