import React from 'react';
import { Link } from 'react-router-dom'; 
import './frame8.css'; 

const Frame8 = () => {
  return (
    <div className="frame-8">
      {/* Image and Title */}
      <div className="rectangle-12"></div>
      <img
        className="photo21"
        src="photo2.jpg"
        alt="Bells University logo"
      />
      <div className="bells-unversity-of-technlogy">
        BELLS UNIVERSITY OF TECHNOLOGY
      </div>
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

      {/* Other sections */}
      <div className="rectangle-13"></div>
      <div className="group-39">
        <div className="rectangle-6333"></div>
        <div className="save">Save</div>
      </div>
      <div className="group-40">
        <div className="rectangle-62"></div>
        <div className="cancel">Cancel</div>
      </div>
      <div className="group-34">
        <div className="name">Name</div>
        <div className="rectangle-63"></div>
        <div className="name2"></div>
      </div>
      <div className="group-37">
        <div className="contact-number">Contact Number</div>
        <div className="rectangle-64"></div>
        <div className="contact-number2"></div>
      </div>
      <div className="group-36">
        <div className="department">Department</div>
        <div className="rectangle-65"></div>
        <div className="department2"></div>
      </div>
      <div className="group-35">
        <div className="matric-no">Matric No</div>
        <div className="rectangle-666"></div>
        <div className="matric-no2"></div>
      </div>
      <div className="group-38">
        <div className="rectangle-67"></div>
        <div className="edit-profile">Edit Profile</div>
      </div>
      <img
        className="icon4"
        src="icon4.png"
        alt="personal icon"
      />
      <div className="profile2">Profile</div>
      <div className="rectangle-14"></div>
      <img
        className="photo2"
        src="photo2.jpg"
        alt="Bells University"
      />
      <div className="site">Site</div>
      <div className="profile3">Profile</div>
      <div className="about2">About</div>
      <div className="found2">Found</div>
      <div className="lost2">Lost</div>
      <div className="help">Help</div>
      <div className="customer-support">Customer Support</div>
      <div className="terms-conditions">Terms & Conditions</div>
      <div className="privacy-policy">Privacy Policy</div>
      <div className="copyright-2024-ict-resource-center-bells-university-of-technology-ota">
        © Copyright 2024 ICT Resource Center, Bells University of Technology, Ota
        <br />
      </div>
      <div className="about-us">About Us</div>
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

export default Frame8;