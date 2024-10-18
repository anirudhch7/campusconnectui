import React from 'react';
import './Signup.css';
import logo from '../assets/logo.png'

const Signup = () => {
    return (
        <div className="signup-container">
            <div className="base-container">
            <div className="signup-logo">
                <img src={logo} alt="Logo" />
            </div>
            <h1>Sign up</h1>
            <p>
                By signing up, you agree to Campuswire’s <a href="#">Terms Of Service</a> and <a href="/privacy">Privacy Policy</a>.
            </p>
            <form className="signup-form">
                <input type="email" placeholder="Email" required />
                <button type="submit">Create an account</button>
            </form>
            <p className="signin-link">
                Already have an account? <a href="/login">Sign in</a>
            </p>
        </div>
        </div>
    );
};

export default Signup;
