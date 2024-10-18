// src/LandingPage.js
import React from 'react';
import { motion } from 'framer-motion';
import './LandingPage.css';
import logo from '../src/assets/logo.png';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signup');
  };
  return (
    <div className="landing-page container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="CampusConnect Logo" />       CampusConnect
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Platform</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Sign In</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="row align-items-center">
        <motion.div 
          className="col-lg-6 content"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Discover, Connect, Succeed Together.</h1>
          <p>CampusConnect is your platform for seamless learning and collaboration.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
          </p>
          <form className="email-form">
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className="btn btn-primary"
              type="button"
              onClick={handleClick}
            >
              Get started
            </motion.button>
          </form>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            className="btn btn-secondary demo-btn"
          >
            Schedule a demo
          </motion.button>
        </motion.div>

        <motion.div 
          className="col-lg-6 text-center mockup-image"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={logo} alt="Platform Screenshot" />
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
