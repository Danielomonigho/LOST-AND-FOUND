import React from "react";
import { Link } from "react-router-dom";
import "./ReportLostPage.css"; 

const ReportLostPage = () => {
  
  return (
    <div className="report-lost-page0">
      <div className="logo-12"></div>
      <div className="report-lost-item7">Report Lost Item</div>
      <div className="rectangle-77"></div>
      <div className="rectangle-888"></div>
      
      <img
        className="photo21"
        src="/photo21.jpg"
        alt="bells university logo"
      />
      
      <div className="bells-unversity-of-technlogy">
        BELLS UNIVERSITY OF TECHNOLOGY
      </div>
      <div className="only-the-best-is-good-for-bells">
        ONLY THE BEST IS GOOD FOR BELLS
      </div>

      
      <Link to="/" className="home">Home</Link>
      <Link to="/about" className="about">About</Link>
      <Link to="/profile" className="profile">Profile</Link>
      <Link to="/reportlost" className="lost">Lost</Link>
      <Link to="/found" className="found">Found</Link>

      
      <div className="group-779">
        <div className="item-description">Item Description:</div>
        <div className="rectangle-622"></div>
      </div>

      <div className="group-23">
        <div className="location">Location:</div>
        <div className="rectangle-633"></div>
        <img className="group-21" src="icon5.png" alt="Location icon" />
      </div>

      <div className="group-212">
        <div className="matric-no1">Matric No:</div>
      </div>

      <div className="group-30">
        <div className="item">Item:</div>
        <div className="rectangle-644"></div>
        <div className="rectangle-7"></div>
        <div className="rectangle-8"></div>
      </div>

      <div className="group-18">
        <div className="name1">Name:</div>
      </div>

      <div className="group-25">
        <div className="group-24">
          <div className="date">Date:</div>
          <div className="rectangle-655"></div>
        </div>
        <div className="state-layer">
          <img className="icon" src="/icon6.png" alt="Calendar icon" />
        </div>
      </div>

      <div className="group-29">
        <div className="group-28">
          <div className="upload-photo">Upload Photo:</div>
          <div className="rectangle-66"></div>
        </div>
        <div className="upload-if-available">(Upload if available)</div>
      </div>

      <div className="rectangle-23"></div>
      
      <img
        className="photo-2024-12-22-19-15-22-1"
        src="/photo2.jpg"
        alt="Lost item preview"
      />

      {/* Footer Section with div elements */}
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

export default ReportLostPage;