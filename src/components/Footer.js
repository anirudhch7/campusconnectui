import React from 'react';
import './Footer.css'; // Import the CSS for styling
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p>Committed for optimizing educational strategies and fostering effective learning.</p>
          <p>© 2024 CampusConnect, Inc.</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Platform</h4>
            <ul>
              <li><a href="#">Class forum</a></li>
              <li><a href="#">Chatrooms</a></li>
              <li><a href="#">Lectures</a></li>
              <li><a href="#">Insights</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About us</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/privacy">Privacy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Help & Contact</h4>
            <ul>
              <li><a href="#">FERPA</a></li>
              <li><a href="#">Help request</a></li>
              <li><a href="#">Inquiries</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
