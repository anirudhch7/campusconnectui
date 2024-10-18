import React, { useEffect } from 'react';
import './AboutUs.css'; // Import the CSS file for styling
import img1 from '../assets/logo.png';
import img2 from '../assets/logo.png';

const AboutUs = () => {
  useEffect(() => {
    const statsItems = document.querySelectorAll('.stats div');

    const handleScroll = () => {
      statsItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          item.style.transition = 'all 0.6s ease';
          item.style.opacity = 1;
          item.style.transform = 'translateY(0)';
        }
      });
    };

    statsItems.forEach(item => {
      item.style.opacity = 0;
      item.style.transform = 'translateY(20px)';
    });

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="about-us">
      <header className="about-header">
        <h1>Our Mission</h1>
        <p className="intro-text">We’re on a mission to optimize the world’s teaching and learning...We’re on a mission to optimize the world’s teaching and learning...</p>
      </header>

      <section className="chapter">
        <div className="chapter-content">
          <div className="chapter-text">
            <h2>Chapter 1</h2>
            <p>We built Campuswire Platform because we knew that...The past eight months have transformed higher education...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          </div>
          <div className="chapter-image">
            <img src={img1} alt="Chapter 1" />
          </div>
        </div>
      </section>

      <section className="chapter">
        <div className="chapter-content reverse">
          <div className="chapter-text">
            <h2>Chapter 2</h2>
            <p>The past eight months have transformed higher education...The past eight months have transformed higher education...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          </div>
          <div className="chapter-image">
            <img src={img2} alt="Chapter 2" />
          </div>
        </div>
      </section>

      <section className="chapter">
        <div className="chapter-content">
          <div className="chapter-text">
            <h2>Chapter 3</h2>
            <p>Some additional content for Chapter 3... The past eight months have transformed higher education...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          </div>
          <div className="chapter-image">
            <img src={img2} alt="Chapter 3" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
