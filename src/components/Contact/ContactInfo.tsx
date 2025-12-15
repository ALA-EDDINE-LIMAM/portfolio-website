import React from 'react';

const ContactInfo: React.FC = () => {
    return (
        <div className="contact-info">
            <h2>Contact Information</h2>
            <p>If you would like to get in touch, feel free to reach out through any of the following methods:</p>
            <ul>
                <li>Email: <a href="mailto:your-email@example.com">your-email@example.com</a></li>
                <li>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></li>
                <li>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a></li>
            </ul>
        </div>
    );
};

export default ContactInfo;