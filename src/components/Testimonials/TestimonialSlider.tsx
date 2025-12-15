import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import TestimonialCard from './TestimonialCard';
import testimonialsData from '../../data/testimonials';
import { Pagination, Navigation } from 'swiper/modules';

interface TestimonialItem {
    id: number;
    quote: string;
    author: string;
    position: string;
    company: string;
}

const TestimonialSlider: React.FC = () => {
    return (
        <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
        >
            {testimonialsData.map((testimonial: TestimonialItem) => (
                <SwiperSlide key={testimonial.id}>
                    <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default TestimonialSlider;