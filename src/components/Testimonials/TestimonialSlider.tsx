import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import TestimonialCard from './TestimonialCard';
import testimonialsData from '../../data/testimonials';

const TestimonialSlider: React.FC = () => {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
        >
            {testimonialsData.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                    <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default TestimonialSlider;