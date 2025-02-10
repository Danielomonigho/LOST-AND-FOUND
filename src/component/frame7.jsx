import React from 'react';
import { Link } from 'react-router-dom'; 
import './frame7.css'; 

const Frame7 = () => {
  return (
    <div className="frame-7" id="frame7">
      <div className="rectangle-9"></div>
      <img
        className="photo21"
        src="photo21.jpg"
        alt="Bells university logo"
      />
      <div className="bells-unversity-of-technlogy">BELLS UNIVERSITY OF TECHNOLOGY</div>
      <div className="only-the-best-is-good-for-bells">
        ONLY THE BEST IS GOOD FOR BELLS
      </div>

      {/* Navigation Bar */}
      <nav className="navigation-bar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link> 
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link> 
          </li>
          <li className="nav-item">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="nav-item">
            <Link to="/lost">Lost</Link>
          </li>
          <li className="nav-item">
            <Link to="/found">Found</Link>
          </li>
        </ul>
      </nav>

      <div className="rectangle-10">
        <b>Our Mission</b>
        <br />
        Our mission is to create a reliable and efficient platform for reuniting lost items with their rightful owners. <br />
        We aim to foster a supportive community where users can easily report, search, and recover lost belongings, enhancing trust and cooperation among individuals in the campus. <br />
        By leveraging technology, we strive to reduce the time, effort, and stress associated with finding lost items, ensuring a seamless and satisfying experience for all our students.
      </div>

      <div className="rectangle-11"></div>
      <img
        className="photo2"
        src="photo2.jpg"
        alt="bells university logo"
      />
      <div className="copyright-2024-ict-resource-center-bells-university-of-technology-ota">
        © Copyright 2024 ICT Resource Center, Bells University of Technology, Ota
        <br />
      </div>
      <div className="help">Help</div>
      <div className="customer-support">Customer Support</div>
      <div className="terms-conditions">Terms & Conditions</div>
      <div className="privacy-policy">Privacy Policy</div>
      <div className="about-us2">About Us</div>
      <div className="links">Links</div>
      <div className="contact">Contact</div>
      <div className="tel-234-8169629948">Tel: +234 8169629948</div>
      <div className="email-danielomonigho-062-gmail-com">
        Email: danielomonigho062@gmail.com
      </div>
      <div className="linkdin">LinkedIn</div>
      <div className="facebook">Facebook</div>
      <div className="instagram">Instagram</div>
    </div>
  );
};

export default Frame7;