import React from 'react';

interface TestimonialCardProps {
    name: string;
    position: string;
    company: string;
    testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, position, company, testimonial }) => {
    return (
        <div className="testimonial-card">
            <p className="testimonial-quote">"{testimonial}"</p>
            <div className="testimonial-author">
                <h4>{name}</h4>
                <p>{position} at {company}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;