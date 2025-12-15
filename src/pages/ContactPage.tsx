import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import AnimatedBackground from '../components/common/AnimatedBackground';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const result = await emailjs.sendForm(
        'service_qbocniu',
        'template_yg6bdi8',
        formRef.current!,
        'LmpfmEENOf1nXfH9S'
      );
      
      console.log('SUCCESS!', result.text);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error: any) {
      console.error('FAILED...', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <AnimatedBackground />
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="page-tag">Get In Touch</span>
          <h1>Contact Me</h1>
          <p>Have a project in mind? Let's work together.</p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>Let's Connect</h2>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>

            <div className="contact-cards">
              <motion.a
                href="mailto:alaalimam07@gmail.com"
                className="contact-card"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <span className="contact-icon">📧</span>
                <div className="contact-details">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">alaalimam07@gmail.com</span>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/alaa-limam"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <span className="contact-icon">💼</span>
                <div className="contact-details">
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">Alaa Limam</span>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/ALA-EDDINE-LIMAM"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <span className="contact-icon">💻</span>
                <div className="contact-details">
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">ALA-EDDINE-LIMAM</span>
                </div>
              </motion.a>

              <motion.a
                href="tel:+21627933376"
                className="contact-card"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <span className="contact-icon">📱</span>
                <div className="contact-details">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">27 933 376</span>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ala Eddine Limam"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alaaeddine@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className={`submit-btn ${status}`}
                disabled={status === 'sending'}
                whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
              >
                {status === 'idle' && 'Send Message'}
                {status === 'sending' && 'Sending...'}
                {status === 'success' && '✅ Message Sent!'}
                {status === 'error' && '❌ Failed - Try Again'}
              </motion.button>

              {status === 'success' && (
                <p className="success-message">Thank you! I'll get back to you soon.</p>
              )}

              {status === 'error' && (
                <p className="error-message">Something went wrong. Please email me directly.</p>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;