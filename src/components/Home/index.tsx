import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="hero-title">
                        Hi, I'm <span className="highlight">Ala Eddine</span>
                    </h1>
                    <h2 className="hero-subtitle">
                        Embedded Systems & Robotics Engineer
                    </h2>
                    <p className="hero-description">
                        Passionate about creating innovative solutions in IoT, robotics,
                        and embedded systems. Turning ideas into reality.
                    </p>
                    <div className="hero-buttons">
                        <a href="#contact" className="btn btn-primary">
                            Contact Me
                        </a>
                        <a href="/resume.pdf" className="btn btn-secondary" download>
                            Download CV
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <img src="/profile.jpg" alt="Profile" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;