import React from 'react';
import { motion } from 'framer-motion';
import './Login.css'; // Import CSS for styling
import logo from '../assets/logo.png';
const Login = () => {
  return (
    <div className="login-container">
      <motion.div 
        className="login-card"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={logo} alt="CampusConnect Logo" className="login-logo" />
        <h2>Welcome back! <span role="img" aria-label="wave">👋</span></h2>
        <form className="login-form">
          <input type="email" placeholder="Email" className="form-control" />
          <input type="password" placeholder="Password" className="form-control" />
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            className="btn btn-primary"
            type="submit"
          >
            Sign in
          </motion.button>
        </form>
        <div className="login-footer">
          <a href="#" className="forgot-password">Forgot your password?</a>
          <p>Don't have an account yet? <a href="/signup" className="signup-link">Sign up</a></p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
