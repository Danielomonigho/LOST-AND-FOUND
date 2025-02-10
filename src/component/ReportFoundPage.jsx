import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './ReportFoundPage.css'; // Assuming the styles are stored in the CSS file

const ReportFoundPage = () => {
  return (
    <div className="report-found-page">
      <div className="logo-1"></div>
      <div className="report-found-item">Report Found Item</div>
      <div className="rectangle-6"></div>
      <div className="rectangle-22"></div>
      <img
        className="photo-2024-12-22-19-15-22-2"
        src="photo21.jpg"
        alt="Found item"
      />
      <div className="bells-unversity-of-technlogy">BELLS UNIVERSITY OF TECHNOLOGY</div>
      <div className="only-the-best-is-good-for-bells">
        ONLY THE BEST IS GOOD FOR BELLS
      </div>

      {/* Navigation Links */}
      <Link to="/" className="home-link">
        <div className="home">Home</div>
      </Link>

      <Link to="/about" className="about-link">
        <div className="about">About</div>
      </Link>

      <Link to="/profile" className="profile-link">
        <div className="profile">Profile</div>
      </Link>

      <Link to="/lost" className="lost-link">
        <div className="lost">Lost</div>
      </Link>

      {/* "Found" link is already added */}
      <Link to="/found" className="found-link">
        <div className="found">Found</div>
      </Link>

      <div className="group-26">
        <div className="item-description">Item Description : :</div>
        <div className="rectangle-494"></div>
      </div>

      <div className="group-23">
        <div className="location">Location :</div>
        <div className="rectangle-656"></div>
        <img className="group-21" src="icon5.png" alt="Location icon" />
      </div>

      <div className="group-212">
        <div className="matric-no2">Matric No :</div>
      </div>

      <div className="group-30">
        <div className="item">Item :</div>
        <div className="rectangle-604"></div>
        <div className="rectangle-7"></div>
        <div className="rectangle-8"></div>
      </div>

      <div className="group-18">
        <div className="name41">Name :</div>
      </div>

      <div className="group-25">
        <div className="group-24">
          <div className="date">Date :</div>
          <div className="rectangle-605"></div>
        </div>
        <div className="state-layer">
          <img className="icon" src="icon6.png" alt="Calendar icon" />
        </div>
      </div>

      <div className="group-29">
        <div className="group-28">
          <div className="upload-photo">Upload Photo :</div>
          <div className="rectangle-66"></div>
        </div>
        <div className="upload-if-available">(Upload if available)</div>
      </div>

      <div className="rectangle-23"></div>
      <img
        className="photo-2024-12-22-19-15-22-1"
        src="photo2.jpg"
        alt="Found item details"
      />

      <div className="site">Site</div>
      <div className="profile2">Profile</div>
      <div className="about2">About</div>
      <div className="found2">Found</div>
      <div className="lost2">Lost</div>
      <div className="help">Help</div>
      <div className="customer-support">Customer Support</div>
      <div className="terms-conditions">Terms &amp; Conditions</div>
      <div className="privacy-policy">Privacy Policy</div>
      <div className="copyright-2024-ict-resource-center-bells-university-of-technology-ota">
        © Copyright 2024 ICT Resource Center, Bells University of Technology, ota
        <br />
      </div>

      <div className="about-us">About Us</div>
      <div className="links">Links</div>
      <div className="contact">Contact</div>
      <div className="tel-234-8169629948">Tel : +234 8169629948</div>
      <div className="email-danielomonigho-062-gmail-com">
        Email : danielomonigho062@gmail.com
      </div>
      <div className="linkdin">LinkedIn</div>
      <div className="facebook">Facebook</div>
      <div className="instagram">Instagram</div>
    </div>
  );
};

export default ReportFoundPage;