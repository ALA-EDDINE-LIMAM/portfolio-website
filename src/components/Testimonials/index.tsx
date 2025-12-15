import React from 'react';
import testimonialsData from '../../../data/testimonials';
import TestimonialCard from './TestimonialCard';
import TestimonialSlider from './TestimonialSlider';

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials">
            <h2>Testimonials</h2>
            <TestimonialSlider>
                {testimonialsData.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
            </TestimonialSlider>
        </section>
    );
};

export default Testimonials;