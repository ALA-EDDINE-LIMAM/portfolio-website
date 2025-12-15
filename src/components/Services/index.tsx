import React from 'react';
import { servicesData } from '../../../data/services';
import ServiceCard from './ServiceCard';
import SectionTitle from '../common/SectionTitle';

const Services: React.FC = () => {
    return (
        <section id="services">
            <SectionTitle title="My Services" />
            <div className="services-container">
                {servicesData.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </section>
    );
};

export default Services;