import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import './Contact.css';

const Contact: React.FC = () => {
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <ContactForm />
            <ContactInfo />
        </section>
    );
};

export default Contact;