import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <div className="hero">
            <h1 className="hero__title">Your Name</h1>
            <h2 className="hero__subtitle">Your Title or Tagline</h2>
            <p className="hero__description">A brief description or tagline about yourself.</p>
            <a href="#contact" className="hero__cta-button">Get in Touch</a>
        </div>
    );
};

export default Hero;