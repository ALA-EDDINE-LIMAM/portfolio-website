import React from 'react';

interface TestimonialItem {
    id: number;
    quote: string;
    author: string;
    position: string;
    company: string;
    testimonial?: string; // Optional if quote is used
}

interface TestimonialCardProps {
    testimonial: TestimonialItem;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    return (
        <div className="testimonial-card">
            <p className="testimonial-quote">"{testimonial.quote || testimonial.testimonial}"</p>
            <div className="testimonial-author">
                <h4>{testimonial.author}</h4>
                <p>{testimonial.position} at {testimonial.company}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;