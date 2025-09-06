import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png'; // replace with your logo path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src={logo} alt="Webmok Logo" className="footer-logo" />
        </div>

        <div className="footer-info">
          <div>
            <h4>Headquarters</h4>
            <p>1st Floor, 129 L, Near by Power House, Model Town, Rohtak, Haryana 124001</p>
          </div>
          <div>
            <h4>Delhi Office</h4>
            <p>2nd Floor, 130 B Sewak Park, Dwarka Mor, Opp. Metro, New Delhi 110059</p>
          </div>
        </div>
        <div className="footer-info">
          <div>
            <h4>Headquarters</h4>
            <p>1st Floor, 129 L, Near by Power House, Model Town, Rohtak, Haryana 124001</p>
          </div>
          <div>
            <h4>Delhi Office</h4>
            <p>2nd Floor, 130 B Sewak Park, Dwarka Mor, Opp. Metro, New Delhi 110059</p>
          </div>
        </div>

        <div className="footer-contact">
          <div>
            <h4>Contact Us</h4>
            <p>Phone: +91 89503 29919</p>
            <p>Mobile: +91 86840 31003</p>
            <p>Email: info@webmok.in</p>
          </div>
        </div>
      </div>
      

        <div className="footer-note">
          <p>Accelerating digital growth with creativity & innovation — since 2016.</p>
        </div>
    </footer>
  );
};

export default Footer;
