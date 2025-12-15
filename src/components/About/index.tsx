import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <section id="about" className="about">
            <h2 className="section-title">About Me</h2>
            <p>
                Hello! I'm a passionate developer with a love for creating dynamic and responsive web applications. 
                My journey in tech began with a fascination for problem-solving and a desire to build impactful solutions.
            </p>
            <p>
                I have experience in various technologies and frameworks, and I continuously strive to learn and grow in this ever-evolving field.
            </p>
            <p>
                When I'm not coding, you can find me exploring new technologies, reading, or contributing to open-source projects.
            </p>
        </section>
    );
};

export default About;