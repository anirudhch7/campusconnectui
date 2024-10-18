import React, { useEffect } from 'react';
import './Privacy.css'; // Import the CSS file for styling
import logo from '../assets/logo.png';

const Privacy = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Handle intersection observer for animations
    const sections = document.querySelectorAll('.privacy-section');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    });

    sections.forEach(section => observer.observe(section));

    // Cleanup function to remove event listeners
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div>
      <header className="bg-light text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Privacy Policy</h1>
          <p className="lead">Your privacy is critically important to us. This policy explains how we collect, use, and share information about you.</p>
        </div>
      </header>

      <section id="info-collect" className="privacy-section bg-light py-5">
        <div className="container text-center">
          <h2 className="h2 fw-bold mb-4">Information We Collect</h2>
          <p className="lead">We collect information directly from you, from third parties, and automatically through your use of our services.</p>
          {/* <img src="your-image-url.jpg" alt="Description" /> */}
        </div>
      </section>

      <section id="use-info" className="privacy-section bg-light py-5">
        <div className="container text-center">
          <h2 className="h2 fw-bold mb-4">How We Use Your Information</h2>
          <p className="lead">We use the information we collect to provide, maintain, and improve our services, and to communicate with you.</p>
          {/* <img src="your-image-url.jpg" alt="Description" /> */}
        </div>
      </section>

      <section id="your-rights" className="privacy-section bg-light py-5">
        <div className="container text-center">
          <h2 className="h2 fw-bold mb-4">Your Rights</h2>
          <p className="lead">You have the right to access, correct, or delete your personal information. You can also object to our processing of your data.</p>
          {/* <img src="your-image-url.jpg" alt="Description" /> */}
        </div>
      </section>

      <section id="contact" className="privacy-section bg-light py-5">
        <div className="container text-center">
          <h2 className="h2 fw-bold mb-4">Contact Us</h2>
          <p className="lead">If you have any questions about this Privacy Policy, please contact us at privacy@example.com.</p>
        </div>
      </section>

      
    </div>
  );
};

export default Privacy;
